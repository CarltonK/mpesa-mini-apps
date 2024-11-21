/* 
 * Middleware - Thunk
 * Library - https://redux.js.org/usage/writing-logic-thunks
 * Installation - npm install redux-thunk
 */

import React, { useEffect } from 'react';
import { usePostsStore } from '../../store/posts.store';

function Posts2() {
    const { posts, loading, error, fetchPosts } = usePostsStore((state) => state);

    useEffect(() => { (fetchPosts()) },[fetchPosts])

    if (loading) return (<p>Loading...</p>);
    if (error) return (<p>Error detected: {error}</p>);

    return(
        <div>
            <ul>
                {/* FOR LOOP - For each item in the list show a list item */}
                { posts.map((post) => (
                    <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
                        <h1 style={{ color: '#333' }}>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )) }
            </ul>
        </div>
    );
}

export default Posts2;