import React from 'react';
//import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {

  return (
    <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-1 mb-1">
      <li className="nav-item">
        <a href="#home" className="nav-link px-1 text-body">Home</a>
        </li>
      <li className="nav-item"><a href="#blog" className="nav-link px-1 text-body">Blog</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-1 text-body">Trabalhe Conosco</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-1 text-body">Quem Somos</a></li>
    </ul>

    <hr />
    
    <p className="text-center px-1 text-body">&copy; 2023</p>
    
  </footer>
</div>
  );
};

export default Footer;