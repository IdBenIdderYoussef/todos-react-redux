import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, toggleAll, addTodo } from '../actions'
import { TodoModal } from './TodoModal'

/**
 * Filter todos Component contains also two buttons one for add new todo and other for toggle all todos to completed
 */

export const Filter = () => {

    // modal open state 
    const [isOpen, setIsOpen] = React.useState(false);

    // show add todo modal
    const showModal = () => {
        setIsOpen(true);
    };

    // hide add todo modal
    const hideModal = () => {
        setIsOpen(false);
    };

    //todos state from redux store
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // counr done and active todos
    const doneCount = todos.reduce((count, item) => (item.completed ? count + 1 : count), 0);
    const activeCount = todos.reduce((count, item) => (!item.completed ? count + 1 : count), 0);

    // radio button change event
    const handleOnChangeFilter = (event) => {
        dispatch(setFilter(event.target.value));
    };

    // save new todo function
    const saveTodo = (title) => {
        dispatch(addTodo(title));
        hideModal();
    }

    return (
        <div className="row px-4 py-4" style={{ fontSize: "18px" }}>
            
            {/* begin radio group filter */}
            <div className="custom-control custom-radio col-2 mt-2">
                <input type="radio" className="custom-control-input" id="all" value="SHOW_ALL"
                    onChange={(e) => handleOnChangeFilter(e)} name="filter" />
                <label className="custom-control-label" htmlFor="all">All({todos.length})</label>
            </div>
            <div className="custom-control custom-radio col-2 mt-2">
                <input type="radio" className="custom-control-input" id="active" value="SHOW_ACTIVE"
                    onChange={(e) => handleOnChangeFilter(e)} name="filter" />
                <label className="custom-control-label" htmlFor="active" >Acive({activeCount})</label>
            </div>
            <div className="custom-control custom-radio col-2 mt-2">
                <input type="radio" className="custom-control-input" id="done" value="SHOW_DONE"
                    onChange={(e) => handleOnChangeFilter(e)} name="filter" />
                <label className="custom-control-label" htmlFor="done" >Done({doneCount})</label>
            </div>
            {/* end radio group filter */}
            
            {/* toggle all todos button */}
            <div className="col-3">
                <button className="btn btn-primary" onClick={() => dispatch(toggleAll())}>Mark all as completed</button>
            </div>

            {/* add todo button */}
            <div className="col-3">
                <button className="btn btn-success" onClick={showModal}>Add Todo</button>
            </div>

            {/* modal to add new todo */}
            {isOpen &&
                <TodoModal toggle={hideModal} action={saveTodo} actionName={"Add"} modalTitle={"Add New To do"} />
            }
        </div>
    );
};