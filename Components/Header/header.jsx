import React from 'react';
//import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-light">

    <div className="header-container-fluid">

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav ms-auto">
      
          <li className="nav-item">
            <a className="nav-link" href="Sistemas">Sistemas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="About">Quem Somos</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/">Trabalhe Conosco</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="Login">Login</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-black" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
};

export default Header;