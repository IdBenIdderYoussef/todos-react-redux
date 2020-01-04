import React from 'react'
import '../styles/Header.css'
import { useDispatch } from 'react-redux';
import { searchTodo } from '../actions'

/**
  * Header component : contains App name and input to search for todos by title
  */
export const Header = () => {

    const dispatch = useDispatch();


    return (
        <div className="header shadow p-3 rounded">
            <h1 className="my-3">My To Do List</h1>
            <input type="text" className="form-control my-3 p-4" style={{fontSize:'1.2rem'}}
                aria-label="Search" onChange={(e) => dispatch(searchTodo(e.target.value))} placeholder="Search" />
        </div>
    );
};