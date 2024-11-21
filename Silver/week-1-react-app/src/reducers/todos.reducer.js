export const todosReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, { id: Date.now(), text: action.input, completed: false }];
      case 'DONE_TODO':
        return state.map((todo) => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.id !== action.id);
      default:
        return state;
    }
  }