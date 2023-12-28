import React from 'react';
import {useEffect} from "react";
import Footer from '../../Components/Footer/footer';
import Header from '../../Components/Header/header';


function Sistemas(){

  useEffect(() => window.scrollTo(0, 0),[]);

  return ( 

    <section>
      
      <div id="Sistemas" className="carousel slide" data-bs-ride="carousel">

    <Header /> {/* Usando o componente Header */}

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="Logos/teste.jpg" className="d-block w-100" alt="" />
        <div className="carousel-caption d-none d-md-block">
        <h5>Diário do Trader</h5>
        <p>Com o nosso sistema de diário, você terá uma visão clara e organizada do seu desempenho.
        Ele fornece gráficos e estatísticas precisas para que você possa avaliar suas estratégias, 
        identificar pontos fortes e fracos e tomar decisões baseadas em dados reais.</p>
      </div>
      </div>
      <div className="carousel-item">
        <img src="Logos/quemsomos.jpg" className="d-block w-100" alt="" />
        <div className="carousel-caption d-none d-md-block">
        <h5>Diário Emocional</h5>
        <p>Através do nosso sistema de diário emocional, você desenvolverá uma maior autoconsciência, o que será fundamental para alcançar a consistência no day trade. 
        Com uma análise emocional aprofundada, você poderá identificar pontos de melhoria e construir estratégias eficazes para controlar e gerenciar suas emoções.</p>
      </div>
      </div>
      <div className="carousel-item">
        <img src="Logos/quemsomos.jpg" className="d-block w-100" alt="" />
        <div className="carousel-caption d-none d-md-block">
        <h5>Plano de Trade</h5>
        <p>Através do nosso sistema de diário emocional, você desenvolverá uma maior autoconsciência, o que será fundamental para alcançar a consistência no day trade. 
        Com uma análise emocional aprofundada, você poderá identificar pontos de melhoria e construir estratégias eficazes para controlar e gerenciar suas emoções.</p>
      </div>
      </div>
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  <Footer/> {/* Usando o componente Footer */}

  </section>
  )
}

export default Sistemas;