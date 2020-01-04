import React from 'react'
import Modal from "react-bootstrap/Modal";

/**
  * Reusable Modal : we use it for add new todo and edit todo
  * props
  *     toggle : to hide modal
  *     action (edit function or add todo function)
  *     modalTitle
  *     actionName
  *     defaultTtile : title of todo we want to edit or "" when we want to add new
  */

export const TodoModal = ({toggle, action, modalTitle, actionName, defaultTitle=""}) => {

    const [title, setTitle] = React.useState(defaultTitle);

    return (
        <Modal show={true} onHide={toggle} size="lg">
            <Modal.Header>
                <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="new-todo-title" className="col-form-label" style={{fontSize:'1.5rem'}}>Title:</label>
                    <input type="text" className="form-control p-4" id="new-todo-title" placeholder="Title..."
                        style={{fontSize:'1.2rem',color:'black'}} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={toggle}>Cancel</button>
                <button className="btn btn-success" onClick={() => action(title)}>{actionName}</button>
            </Modal.Footer>
        </Modal>
    )
}
