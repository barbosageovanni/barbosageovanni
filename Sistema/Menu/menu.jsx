import React from 'react';
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import './menu.css';

function Menu(){

  useEffect(() => window.scrollTo(0, 0),[]);

    return <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      
    <div className="menu-container-fluid">
            
        <a className="navbar-brand my-1" href="/">Basico Management</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/planejamentotrader" className="nav-link" aria-current="page" >Planejamento Diário</Link>
            </li>
            <li className="nav-item">
            <Link to="/DiarioTrader" className="nav-link" aria-current="page" >Diário do Trader</Link>
            </li>
            <li className="nav-item">
            <Link to="/gerenciamentorisco" className="nav-link" aria-current="page" >Gerenciamento de Risco</Link>
            </li>
            <li className="nav-item">
            <Link to="/gerenciamentoemocional" className="nav-link" aria-current="page" >Gerenciamento Emocional</Link>
            </li>
            <li className="nav-item">
            <Link to="/diarioemocional" className="nav-link" aria-current="page" >Diário Emocional</Link>
            </li>
            <li className="nav-item">
            <Link to="/dashboard" className="nav-link" aria-current="page" >DashBoard</Link>
            </li>
            <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page" >Sair</Link>
            </li>
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Menu;