import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

/**
  * TodoDetail : for display a specific todo based on id in route path 
  */

export const TodoDetail = (props) => {

    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({ id: '', title: '', completed: false })
    
    //usage like componentDidMount (last argument an empty array)
    useEffect(() => {
        let id = props.match.params.id;
        setTodo(todos.find(todo => todo.id == id));
    }, []);


    return (
        <div className="card mt-5">
            <div className="card-header">
                <span style={{fontSize:"22px"}}>Id :</span><span> {todo.id} </span>
            </div>
            <div className="card-body">
                <h5 className="card-title">Title :</h5>
                <p className="card-text"> {todo.title}</p>
            </div>
        </div>
    )
}
