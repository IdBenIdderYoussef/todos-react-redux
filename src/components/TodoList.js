import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { Todo } from './Todo'
import { toggleTodo, deleteTodo, editTodo } from '../actions'

/*
 * TodoList Component : display all todos (list of Todo Component)
 */

export const TodoList = () => {

  const url = "https://jsonplaceholder.typicode.com/todos/";

  //todos state from redux store
  const todos = useSelector(state => state.todos);
  //filter state from redux store
  const filter = useSelector(state => state.filter);
  //search state from redux store
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  
  //usage like componentDidMount (last argument an empty array)
  useEffect(() => {
    //dont load dotos if already exist (when navigation between route)
    if (todos.length !== 0) {
      return;
    }

    const fetchData = async () => {
      dispatch({ type: 'GET_DATA_REQUEST' });
      try {
        const result = await axios(url);
        dispatch({ type: 'GET_DATA_SUCCESS', payload: result.data });
      } catch (error) {
        dispatch({ type: 'GET_DATA_FAILURE' });
      }
    };
    fetchData();
  }, []);

  
  //filter todos list state depends of state of filter state and search state
  const filteredTodos = todos.filter(todo => {
    let isSearched = true;
    if (search !== '') {
      isSearched = todo.title.startsWith(search);
    }

    if (filter === 'ALL' && isSearched) {
      return true;
    }
    if (filter === 'ACTIVE' && !todo.completed && isSearched) {
      return true;
    }
    if (filter === 'DONE' && todo.completed && isSearched) {
      return true;
    }
    return false;
  });

  return (
    <ul className="list-group mb-5">
      {filteredTodos.length === 0 ?
        <div className="alert alert-warning">
          {filter === 'ALL' ? "Waiting for todos !" : "No " + filter.toLowerCase() + " Todos"}
        </div>
        :
        filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onDelete={() => dispatch(deleteTodo(todo.id))}
            onEdit={(title) => dispatch(editTodo(todo.id, title))}
          >
            {todo.title}
          </Todo>
        ))}
    </ul>
  );
};
