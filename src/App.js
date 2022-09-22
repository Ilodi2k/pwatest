import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Das ist meine PWA-Test App
        </p>
        <input>
        </input>
        <br></br>
        <select>
          <option>Test1</option>
          <option>Test2</option>
          <option>Test3</option>
        </select>
      </header>
    </div>
  );
}

export default App;
