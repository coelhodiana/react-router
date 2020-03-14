import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

const Sobre = () => {
    return (
        <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Página de Sobre</h1>
            </header>
            <p className="App-intro">
                Exemplo de Página Sobre
                <Link to="/">Ir para a Home</Link>
            </p>
        </div>
     );
}
 
export default Sobre;
