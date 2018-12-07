import React from 'react';
import ViewWrapper from './ViewWrapper';
import logo from './logo.svg';
import './App.css';

export default function App(props) {
  return (
      <div className="App">
        <header className="App-header">
          <h2>Predictable state example using React Hooks and Context API without Redux</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <ViewWrapper />
        </header>
      </div>
  );
}