import React from 'react';
import { StoreProvider } from "./providers/Store";
import Name from './views/Name';
import logo from './logo.svg';
import './App.css';

export default function App(props) {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h2>Predictable state example using React Hooks and Context API without Redux</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <Name />
        </header>
      </div>
    </StoreProvider>
  );
}