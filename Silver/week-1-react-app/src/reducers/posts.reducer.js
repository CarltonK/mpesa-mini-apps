/* 
 * Store 3 items in the state
 * posts = []
 * loading = false
 * error = ''
 */
export const postsReducer = (state = { posts: [], loading: false, error: '' }, action) => {
    // Alternatively use a switch case
    switch (action.type) {
      // Business Logic for showing posts
      case 'FETCH_POSTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_POSTS_SUCCESS':
        return { posts: action.payload, loading: false, error: '' };
      case 'FETCH_POSTS_ERROR':
        return { posts: [], loading: false, error: action.payload };
      default:
        return state;
    }
  }