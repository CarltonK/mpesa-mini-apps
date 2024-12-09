import logo from './logo.svg';
import { createContext, useState, useContext } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/home/Counter';
import TodoApp from './components/home/Todo';
import { thunk } from 'redux-thunk';
import Posts from './components/home/Posts';
import { combineReducers } from 'redux';
import { counterReducer } from './reducers/counter.reducer';
import { todosReducer } from './reducers/todos.reducer';
import { postsReducer } from './reducers/posts.reducer';
import Posts2 from './components/home/Posts2';

// Single Store Approach
const appReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  posts: postsReducer,
});
const store = createStore(appReducer, applyMiddleware(thunk));

const ThemeContext = createContext('light');

function Theme() {
  const theme = useContext(ThemeContext);

  return (
      <div>
          <p>The current theme is {theme}</p>
          <button >
              Change Theme
          </button>
      </div>
  );
}

function Toolbar() {
  return <Theme/>
}

function App() {
  // const [childData, setChildData] = useState('Default value');
  const [theme, setTheme] = useState('light');

  // const handleDataFromChild = (data) => {
  //   setChildData(data);
  // }

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar/>
    </ThemeContext.Provider>
  );

  // return (
  //   <div className="App">
  //     {/* <Home></Home> */}
  //     {/* <Provider store={store}>
  //       <Counter />
  //     </Provider>
  //     <Provider store={store}>
  //       <TodoApp />
  //     </Provider> */}
  //     <Counter />
  //     <Posts />
  //     {/* <Provider store={store}>
  //       <Posts />
  //     </Provider>
  //     <Provider store={store}>
  //       <Posts2 />
  //     </Provider> */}
  //   </div>
  // );
}



export default App;
