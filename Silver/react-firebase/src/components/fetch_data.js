import React, { useReducer, useState } from 'react';

// 3 States
// State 1 = Started to fetch the data but not yet received the data
// State 2 = Data fetched successfully
// State 3 = Data fetched with an error

// You have one API and only the resource changes


const initialState = {
    posts: { data: [], loading: false, error: null },
    comments: { data: [], loading: false, error: null },
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'INITIAL_STATE':
            return {
                ...state,
                [action.target]: { ...state[action.target], loading: true, error: null },
            };
        case 'SUCCESS_STATE':
            return {
                ...state,
                [action.target]: { ...state[action.target], loading: false, data: action.payload },
            };
        case 'FAILED_STATE':
            return {
                ...state,
                [action.target]: { ...state[action.target], loading: false, error: action.payload },
            };
        default:
            return state;
    }
}

// function FetchExample() {

//     const [state, dispatch] = useReducer(reducer, initialState)

//     const fetchData = async (target) => {
//         // Fetching data started
//         dispatch({ type: 'INITIAL_STATE', target })

//         try {
//             const result = await fetch(`https://jsonplaceholder.typicode.com/${target}/1`);
//             if (result.status !== 200) {
//                 // Error here
//                 throw new Error('Hey! There was a problem fetching data');
//             } else {
//                 // Success here
//                 const resultData = await result.json();
//                 console.log(resultData)
//                 dispatch({ type: 'SUCCESS_STATE', target, payload: resultData })
//             }
//         } catch (error) {
//             dispatch({ type: 'FAILED_STATE', target, error: error.message })
//         }
//     }

//     if (state.loading) return <p>Loading....</p>
//     if (state.error) return <p>{state.error}</p>

//     return (
//         <div>
//             <div>
//                 <h1>Posts</h1>
//                 {state.posts.loading && <p>Posts are loading</p>}
//                 {state.posts.error && <p>Error (fetching posts): {state.posts.error}</p>}
//                 {state.posts.data && <p>{state.posts.data.title}</p>}
//                 <button onClick={() => fetchData('posts')}>Load Posts</button>
//             </div>
//             <div>
//                 <h1>Comments</h1>
//                 {state.comments.loading && <p>comments are loading</p>}
//                 {state.comments.error && <p>Error (fetching comments): {state.comments.error}</p>}
//                 {state.comments.data && <p>{state.comments.data.body}</p>}
//                 <button onClick={() => fetchData('comments')}>Load comments</button>
//             </div>
//         </div>
//     );
// }

function DynamicFetchExample() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [postIds, setPostIds] = useState('')
    const [commentIds, setCommentIds] = useState('')

    // Input box will take ids separated by a comma...E.g 1,2,3 -> [1,2,3]

    const fetchData = async (target, ids) => {
        const idArray = ids.split(',').map((id) => id.trim()).filter((id) => id);
        if (!idArray.length) return alert(`Please enter a valid ${target} IDs. They should be comma-separated E.g 1,2,3`)
        // Fetching data started
        dispatch({ type: 'INITIAL_STATE', target })

        try {
            const data = await Promise.all(idArray.map((id) => 
                fetch(`https://jsonplaceholder.typicode.com/${target}/${id}`).then((response) => response.json())
            ))
            dispatch({ type: 'SUCCESS_STATE', target, payload: data })
        } catch (error) {
            dispatch({ type: 'FAILED_STATE', target, error: error.message })
        }
    }

    if (state.loading) return <p>Loading....</p>
    if (state.error) return <p>{state.error}</p>

    return (
        <div>
            <div>
                <h1>Posts</h1>
                <input
                    type="text"
                    value={postIds}
                    onChange={(e) => setPostIds(e.target.value)}
                    placeholder="Enter Post IDs E.g 1,2,3"
                />
                <button onClick={() => fetchData('posts', postIds)}>Load Posts</button>
                {state.posts.loading && <p>Posts are loading</p>}
                {state.posts.error && <p>Error (fetching posts): {state.posts.error}</p>}
                {state.posts.data.length > 0 && (
                    <ol>
                        {state.posts.data.map((post) => (
                            <li key={post.id}>
                                <p>{post.body}</p>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
            <div>
                <h1>Comments</h1>
                <input
                    type="text"
                    value={commentIds}
                    onChange={(e) => setCommentIds(e.target.value)}
                    placeholder="Enter Comment IDs E.g 1,2,3"
                />
                <button onClick={() => fetchData('comments', commentIds)}>Load Comments</button>
                {state.comments.loading && <p>comments are loading</p>}
                {state.comments.error && <p>Error (fetching comments): {state.comments.error}</p>}
                {state.comments.data.length > 0 && (
                    <ol>
                        {state.comments.data.map((comment) => (
                            <li key={comment.id}>
                                <p>{comment.body}</p>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    );
}

export default DynamicFetchExample;