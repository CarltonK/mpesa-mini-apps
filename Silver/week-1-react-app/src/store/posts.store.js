// Zustand Approach
import { create } from 'zustand'

export const usePostsStore = create((set) => ({
    posts: [],
    loading: false,
    error: '',
    fetchPosts: async () => {
        set({ loading: true });
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            // Alternatively use axios
            const response = await fetch(url);
            const data = await response.json();
            set({ posts: data, loading: false, error: '' });
        } catch (error) {
            set({ posts: [], loading: false, error: error.message });
        }
    }
}));