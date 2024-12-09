/* 
 * Middleware - Thunk
 * Library - https://redux.js.org/usage/writing-logic-thunks
 * Installation - npm install redux-thunk
 */

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPosts } from './../../actions/posts.actions';

// function Posts() {
//     const { posts, loading, error } = useSelector((state) => state.posts);
//     const dispatch = useDispatch();

//     useEffect(() => { dispatch(fetchPosts()) },[dispatch])

//     if (loading) return (<p>Loading...</p>);
//     if (error) return (<p>Error detected: {error}</p>);

//     return(
//         <div>
//             <ul>
//                 {/* FOR LOOP - For each item in the list show a list item */}
//                 { posts.map((post) => (
//                     <div key={post.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
//                         <h1 style={{ color: '#333' }}>{post.title}</h1>
//                         <p>{post.body}</p>
//                     </div>
//                 )) }
//             </ul>
//         </div>
//     );
// }

// export default Posts;


import { useEffect, useState } from "react";

function Posts() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching
        setTimeout(() => {
            setData([1, 2, 3, 4, 5]);
            // Disable the loader
            setLoading(false);
        }, 5000)
    }, []);

    if (loading) return (<p>Loading...</p>);

    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default Posts;