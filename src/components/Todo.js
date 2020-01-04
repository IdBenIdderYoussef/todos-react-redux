import React from 'react'
import { TodoModal } from './TodoModal'
import '../styles/Todo.css'
import { Link } from 'react-router-dom';

/**
 * Todo Component : for display a todo in list of todos
 */

export const Todo = ({ children, todo, onToggle, onDelete, onEdit }) => {

    // modal open state 
    const [isOpen, setIsOpen] = React.useState(false);

    // show edit todo modal
    const showModal = () => {
        setIsOpen(true);
    };

    // hide edit todo modal
    const hideModal = () => {
        setIsOpen(false);
    };

    // edit todo function
    const editTodo = (title) => {
        onEdit(title);
        hideModal();
    }

    return (
        <li className="list-group-item todo">
            
            {/* checkbox to toggle todo */}
            <input type="checkbox" className="mr-3" style={{transform : 'scale(1.5,1.5)'}} onChange={onToggle} defaultChecked={todo.completed} />
            
            {/* todo title and a link to todo specific route */}
            <Link to={`/todo/${todo.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <span className='link'
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        fontSize: "1.5rem",
                        cursor: "pointer"
                    }}>
                    {children}
                </span>
            </Link>

            {/* delete todo button */}
            <span className="float-right btn btn-sm btn-danger" onClick={onDelete}>
                <i className="fa fa-trash"></i>
            </span>

            {/* edit todo button */}
            <button className="float-right btn btn-sm btn-primary mx-2" onClick={showModal}>
                <i className="fa fa-edit"></i>
            </button>

            {/* modal to edit a todo */}
            {isOpen &&
                <TodoModal toggle={hideModal} action={editTodo} actionName={"Edit"}
                    modalTitle={"Edit To do"} defaultTitle={children} />
            }
        </li>
    );
};

