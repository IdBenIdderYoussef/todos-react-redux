/**
   * todos reducer : for todo list state
   */
const todos = (state = [], action) => {
    switch (action.type) {


        case 'GET_DATA_REQUEST':
            return state;

        case 'GET_DATA_SUCCESS':
            return action.payload.slice(0, 30)

        case 'GET_DATA_FAILURE':
            return state;

        case 'ADD_TODO':
            return [
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                },
                ...state

            ]

        case 'DELETE_TODO':
            return state.filter(({ id }) => id !== action.id)


        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )

        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, title: action.title } : todo
            )

        case 'TOGGLE_ALL':
            return state.map(todo =>
                !todo.completed ? { ...todo, completed: !todo.completed } : todo
            )

        default:
            return state
    }
}
export default todos