import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
const addTodo = (input) => ({ 
    type: 'ADD_TODO',
    input,
});

const doneTodo = (id) => ({
    type: 'DONE_TODO',
    id,
});

const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id,
});

function TodoApp() {
    // Handle Input
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddClicked = () => {
        if (input) {
            // Sync data to the store
            dispatch(addTodo(input));
            setInput('');
        }
    }

    // Get Data from the store
    const todos = useSelector((state) => state);

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={handleAddClicked}>Add Todo</button>
            <ol>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={() => dispatch(doneTodo(todo.id))}>{todo.text}</span>
                    <button onClick={() => dispatch(removeTodo(todo.id))}></button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TodoApp;