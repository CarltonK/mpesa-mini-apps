/* 
 * Middleware - Thunk
 * Library - https://redux.js.org/usage/writing-logic-thunks
 * Installation - npm install redux-thunk
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const fetchPosts = () => async(dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        // Alternatively use axios
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_POSTS_ERROR', payload: error.message });
    }
}

function Posts() {
    const { posts, loading, error } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => { dispatch(fetchPosts()) },[dispatch])

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error detected: {error}</p>);

    return(
        <div>
            <ul>
                {/* FOR LOOP - For each item in the list show a list item */}
                { posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )) }
            </ul>
        </div>
    );
}

export default Posts;