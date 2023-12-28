import React from 'react';
import './planejamentotrader.css';


function PlanejamentoTrader(){
  return ( 
  
      <div>
         {/* Main content */}
         <div>PlanejamentoTrader</div>
     
         {/* Tables and Data */}
         <div>
           {/* Strategy */}
           <div>
             {/* Title */}
             <div>Estratégia</div>
             {/* Content */}
             <div>
               {/* Entry */}
               <div>Entrada</div>
               {/* Exit */}
               <div>Saída</div>
             </div>
           </div>
     
           {/* Stop Loss */}
           <div>
             {/* Title */}
             <div>Stop Loss</div>
             {/* Content */}
             <div>
               {/* Stop Loss Entry */}
               <div>Entrada Stop Loss</div>
               {/* Stop Loss Exit */}
               <div>Saída Stop Loss</div>
             </div>
           </div>
     
           {/* Risk Management */}
           <div>
             {/* Title */}
             <div>Gestão de Risco</div>
             {/* Content */}
             <div>
               {/* Maximum Risk */}
               <div>Risco Máximo</div>
               {/* Minimum Risk */}
               <div>Risco Mínimo</div>
             </div>
           </div>
         </div>
      </div>
      )
     }

export default PlanejamentoTrader;