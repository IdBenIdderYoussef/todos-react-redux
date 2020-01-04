/**
   * actions
   */

let nextId = 31

// add todo action
export const addTodo = title => ({
  type: 'ADD_TODO',
  id: nextId++,
  title
})

// delete todo action
export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

// edit todo action
export const editTodo = (id, title) => ({
  type: 'EDIT_TODO',
  id,
  title
})

// search todo action
export const searchTodo = title => ({
  type: 'SEARCH_TODO',
  title
})

// filter todo action (set type of filter)
export const setFilter = filter => ({
  type: filter,
})

// toggle todo action : incomplete to completed or completed to incomplete
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

// toggle all todos action : all todos to completed
export const toggleAll = () => ({
  type: 'TOGGLE_ALL'
})

// data actions
export const getDataActions = {
  GET_DATA_REQUEST: 'GET_DATA_REQUEST',
  GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
  GET_DATA_ERROR: 'GET_DATA_FAILURE'
}