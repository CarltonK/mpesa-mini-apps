import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/home/Counter';
import TodoApp from './components/home/Todo';

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

const store = createStore(counterReducer);
const todosStore = createStore(todosReducer);

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
      <Provider store={todosStore}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App;
