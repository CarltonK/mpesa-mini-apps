import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/home/Counter';

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

const store = createStore(counterReducer);

function App() {
  const [childData, setChildData] = useState('Default value');

  const handleDataFromChild = (data) => {
    setChildData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React v18.13.1
        </a> */}
      </header>
      {/* <Home></Home> */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
