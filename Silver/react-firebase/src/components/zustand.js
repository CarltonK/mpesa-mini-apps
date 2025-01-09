import React, { useEffect } from 'react'
import postsStore from './../store/posts_store'

function Posts() {
    const { posts, loading, error, fetchPosts } = postsStore();

    useEffect(() => { fetchPosts() }, [fetchPosts])

    // Checks
    if (loading) return <p>Posts loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <ol>
            <h1>Posts</h1>
            {posts.map((post) => (
                <li >
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                </li>
            ))}
        </ol>

    );
}

export default Posts;