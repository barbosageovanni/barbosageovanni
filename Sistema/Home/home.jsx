import React from 'react';
//import Header from '../../Components/Header/header';
//import Footer from '../../Components/Footer/footer';
import Menu from '../Menu/menu';
import './home.css'
//import Features from './Components/Features/features.jsx';
//import Precos from './Components/Precos/precos.jsx';
//import { Link } from 'react-router-dom';

function Home(){

  return(

    <section id="menu">
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className='container-fluid titulo'>
            <h2>Sistema de Gerenciamento</h2>
            <h4 className="sub-title-text-center">
        Bem-vindo(a) ao Sistema de Gerenciamento de Risco!
      </h4>

      <p className="home-text-center">
        Aqui você encontrará todas as funcionalidades necessárias para
        planejar, gerenciar e analisar suas operações de day trading.
      </p>
         </div>
         
         
 
         <Menu />

    </section>

  );
};

export default Home;