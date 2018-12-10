import React from 'react';
import { StoreProvider } from "./providers/Store";
import Main from './views/Main';
import logo from './logo.svg';
import './App.css';

export default function App(props) {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h2>Predictable state example using React Hooks and Context API</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <Main />
        </header>
      </div>
    </StoreProvider>
  );
}