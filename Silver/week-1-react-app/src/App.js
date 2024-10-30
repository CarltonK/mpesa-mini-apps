// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Welcome from './Welcome';
import InlineStyledButton from './components/styles/InlineStyledButton';
import CssFileButton from './components/styles/CssFIleButton';
import StyledComponentButton from './components/styles/StyledComponentButton';
import LoginForm from './components/authentication/LoginForm';
import FormikForm from './components/authentication/FormikForm';

function App() {
  const [childData, setChildData] = useState('Default value');

  const handleDataFromChild = (data) => {
    setChildData(data);
  }

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
          Learn React v18.13.1
        </a>
      </header> */}

      {/* 
      STATE
       */}
      {/* <h1>Data from Child: {childData}</h1>
      <Welcome 
        sendDataToParent={handleDataFromChild}
        greeting={'Hello from Parent'}
      >
        
      </Welcome> */}

      {/* 
      STYLES
       */}

      {/* <InlineStyledButton></InlineStyledButton> */}
      {/* <CssFileButton></CssFileButton> */}
      {/* <StyledComponentButton></StyledComponentButton> */}

      {/* 
      FORMS
       */}

      {/* <LoginForm></LoginForm> */}
      <FormikForm></FormikForm>
    </div>
  );
}

export default App;
