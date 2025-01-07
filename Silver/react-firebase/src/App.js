import logo from './logo.svg';
import './App.css';
import SignUp from './components/signup';
import SignIn from './components/signin';
import ResetPassword from './components/reset_password';
import Firestore from './components/firestore';
import FetchExample from './components/fetch_data';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <SignUp />
      <SignIn />
      <ResetPassword />
      <Firestore /> */}
      <FetchExample />

      {/* <h1>Testing a new release</h1> */}
    </div>
  );
}

export default App;
