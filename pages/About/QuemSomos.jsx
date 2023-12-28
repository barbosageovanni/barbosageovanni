import React from 'react';
import {useEffect} from "react";
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
//import Features from './Components/Features/features.jsx';
//import Precos from './Components/Precos/precos.jsx';
//import { Link } from 'react-router-dom';

function QuemSomos(){
  
  useEffect(() => window.scrollTo(0, 0),[]);

  return(

<section id="QuemSomos">

          <Header /> {/* Usando o componente Header */}
          
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                      
                      {/*Seção Titulo do Sobre Básico Management*/}
                      <section className='sobre_basico'>

                        <h1 className="fs-4">Sobre a Básico Management</h1>

                          {/*Seção texto do Sobre Básico Management*/}
                        
                        <h6><article className='sobre_basico_texto'>

                        <p> Na interseção da inovação financeira e da tecnologia de ponta, a Básico Management se destaca como uma vanguarda no fornecimento de soluções de gerenciamento de risco para traders.</p>
                        <p>Com um compromisso inabalável com a excelência e uma paixão por resultados sustentáveis, transformamos a arte do trading com um sistema robusto e intuitivo, projetado para maximizar o potencial de nossos clientes.</p>

                        </article></h6>

                      </section>
  
                    {/*Seção Titulo do Sobre Nossa visão*/}

                      <section className='nossa_visao'>

                        <h2 className="fs-4">Nossa Visão</h2>


                        <h6><article className='sobre_nossa_visao'>

                            <p> Vislumbramos um mundo onde o risco é uma oportunidade, não um obstáculo. Nosso objetivo é ser o parceiro de confiança que possibilita aos traders de todos os níveis a navegação segura pelos mares turbulentos dos mercados financeiros, com tranquilidade e controle.</p>
                            </article></h6>

                      </section>

                    {/*Seção Titulo do Sobre Nossa visão*/}

                      <section className='nossos_valores'>

                      <h2 className="fs-4">Nossos Valores</h2>

                      <h6><article className='sobre_nossos_valores'>

                              <p>Confiança: A base de todas as nossas interações e serviços.</p>
                              <p>Inovação: Estamos constantemente em busca de melhorias e inovações.</p>
                              <p>Responsabilidade: Agimos com integridade e transparência em todas as nossas operações.</p>
                              <p>Suporte ao Cliente: Nosso suporte é incansável, sempre disponível para atender às necessidades de nossos clientes.</p>
                              
                      </article></h6>

                      </section> 



                       <h4>Gerencie seus trades de um unico lugar com uma equipe profissional</h4>
                       
                    </div>

                    <div className="col-lg-6">
                        <img src="Logos/quemsomos.jpg" alt="" />

                    </div>

                </div>
            </div>

            <Footer />

        </section>

  );
};

export default QuemSomos;