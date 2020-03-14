import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sobre from './Sobre'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
        <Link to="/sobre">Ir para a página sobre \o/</Link>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Sobre />
    </div>
    </>
  );
}

export default App;
