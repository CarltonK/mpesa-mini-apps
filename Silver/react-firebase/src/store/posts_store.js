import axios from 'axios'

import { create } from 'zustand'

const postsStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,

    // Fetch posts from API
    fetchPosts: async () => {
        // Initial State
        set({ loading: true, error: null })
        try {
            const result = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-12-09&sortBy=publishedAt&apiKey=<API_KEY_HERE>')
            set({ loading: false, posts: result.data.articles })
        } catch (error) {
            set({ loading: false, error: error.message })
        }
    },

    // Add posts to API
    addPosts: async (post) => {
        // Initial State
        set({ loading: true, error: null })
        try {
            const result = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
            set({ loading: false, posts: result.data })
        } catch (error) {
            set({ loading: false, error: error.message })
        }
    },
}));

export default postsStore;