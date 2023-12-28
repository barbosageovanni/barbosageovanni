import React from "react";

function Features(){
    return <section id="features">
        <div className="container">
            <div className="row">

                <div className="col-lg-3 feature-box">
                    <i className="icon fas fa-heart fa-2x"></i>
                    <h3>Fácil de usar</h3>                    
                    <p>O sistema possui uma interface muito simples e fácil de utilizar.</p>
                </div>

                <div className="col-lg-3 feature-box">
                    <i className="icon fas fa-globe-americas fa-2x"></i>
                    <h3>Em qualquer lugar</h3>
                    <p>Gerencie seu fluxo de operações de forma eficiente, onde quer que você esteja.</p>
                </div>

                <div className="col-lg-3 feature-box">
                    <i className="icon fas fa-columns fa-2x"></i>
                    <h3>Organização é tudo</h3>
                    <p>Tenha seu gerenciamento de risco e plano de trades diário sempre muito bem organizado.</p>
                </div>

                <div className="col-lg-3 feature-box">
                    <i className="icon fa-solid fa-person-chalkboard fa-2x"></i>
                    <h3>Equipe especializada</h3>
                    <p>Tenha sua equipe personalizada para gerenciamento de seu negócio. Você não estará sozinho.</p>
                </div>
                       
            </div>
        </div>
    </section>;
  }
  
  export default Features;