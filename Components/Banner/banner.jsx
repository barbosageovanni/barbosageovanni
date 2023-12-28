import React from "react";
import {useEffect} from "react";
import Header from "../Header/header";
import Features from "../Features/features";
import Precos from "../Precos/precos";
import Footer from "../Footer/footer";

function Banner(){

    useEffect(() => window.scrollTo(0, 0),[]);


    return ( 
        <section id="banner">
            
          <Header /> {/* Usando o componente Header */}
          

            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <h1>Uma plataforma que vai mudar a forma de gerenciamento de risco na hora de você operar no mercado financeiro</h1>
                        <h4>Gerencie seus trades de um unico lugar com uma equipe profissional</h4>
                        <a href="NovaConta" className="btn btn-dark btn-lg btn-banner">Criar uma conta</a>
                        <a href="Login" className="btn btn-dark btn-lg btn-banner">Fazer Login</a>
                    </div>

                    <div className="col-lg-6">
                        <img src="Logos/teste.jpg" alt="Basico" />

                    </div>


                </div>


            </div>
            <Features /> {/* Usando o componente Features */}
            <Precos /> {/* Usando o componente Precos */}
            <Footer /> {/* Usando o componente Footer */}

        </section>
    )
  }
  
  export default Banner;