// useReducer

import { useReducer } from "react";
import _default from "react-bootstrap/esm/Nav";

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK': return [
            ...state,
            {
                id: state.length + 1,
                name: action.payload
            }
        ]

        default: return state;
    }
}
const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h4>Todo List {todos.length}</h4>
            Add New Task:
            <input type="text" onBlur={(e) => dispatch({ type: 'ADD_TASK', payload: e.target.value })} />
            <hr/>
            {todos.map(todo => <li key={todo.id}>{todo.name}</li>)}
        </>
    )
}
export default Todos;