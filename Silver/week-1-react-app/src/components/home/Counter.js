import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })

function Counter() {
    const count = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default Counter;