export const fetchPosts = () => async(dispatch) => {
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