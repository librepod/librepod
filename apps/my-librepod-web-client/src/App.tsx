import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href='https://reactjs.org'>
          Learn React Aloha!
        </Link>
      </header>
    </div>
  );
}

export default App;
