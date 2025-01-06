import React, { useReducer, useEffect } from 'react';

// 3 States
// State 1 = Started to fetch the data but not yet received the data
// State 2 = Data fetched successfully
// State 3 = Data fetched with an error

const initalState = {
    data: [],
    loading: false,
    error: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return { loading: true, error: null, ...state };
        case 'SUCCESS_STATE':
            return { loading: false, ...state, data: action.payload };
        case 'FAILED_STATE':
            return { loading: false, error: action.error, ...state };
        default:
            return state;
    }
}

function FetchExample() {

    const [state, dispatch] = useReducer(reducer, initalState)

    useEffect(() => {
        const fetchData = async () => {
            // Fetching data started
            dispatch({ type: 'INITIAL_STATE' })

            try {
                const result = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (result.status !== 200) {
                    // Error here
                    throw new Error('Hey! There was a problem fetching data');
                } else {
                    // Success here
                    const resultData = await result.json();
                    dispatch({ type: 'SUCCESS_STATE', payload: resultData })
                }
            } catch (error) {
                dispatch({ type: 'FAILED_STATE', error: error.message })
            }
        }

        fetchData();
    }, [])

    if (state.loading) return <p>Loading....</p>
    if (state.error) return <p>{state.error}</p>

    return (
        <div>
            <h1>Posts</h1>
            <ol>
                {state.data.map((post) => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ol>
        </div>
    );
}

export default FetchExample;