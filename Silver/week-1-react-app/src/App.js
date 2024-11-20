import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/home/Counter';
import TodoApp from './components/home/Todo';
import { thunk } from 'redux-thunk';
import Posts from './components/home/Posts';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const todosReducer = (state = [], action) => {
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

/* 
 * Store 3 items in the state
 * posts = []
 * loading = false
 * error = ''
 */
const postsReducer = (state = { posts: [], loading: false, error: '' }, action) => {
  // if (action.type === 'FETCH_POSTS_REQUEST') {

  // }
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

const store = createStore(counterReducer);
const todosStore = createStore(todosReducer);
const postsStore = createStore(postsReducer, applyMiddleware(thunk));

function App() {
  const [childData, setChildData] = useState('Default value');

  const handleDataFromChild = (data) => {
    setChildData(data);
  }

  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}
      {/* <Provider store={todosStore}>
        <TodoApp />
      </Provider> */}
      <Provider store={postsStore}>
        <Posts />
      </Provider>
    </div>
  );
}

export default App;
