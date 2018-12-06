import React from 'react';
import ViewWrapper from './ViewWrapper';
import logo from './logo.svg';
import './App.css';

export default function App(props) {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ViewWrapper />
        </header>
      </div>
  );
}