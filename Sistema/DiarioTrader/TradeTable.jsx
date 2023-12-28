import React, { useState, useEffect } from 'react';
import './TradeTable.css';
import TradeRow from "./TradeRow.jsx";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const fetchTradeData = async () => {
  const response = await fetch('');
  const data = await response.json();
  return data;
};
 

const TradeTable = ({ setTrades }) => {
  const [tradeData, setTradeData] = useState([]);
 
  useEffect(() => {
     const fetchData = async () => {
       const data = await fetchTradeData();
       setTradeData(data);
     };
 
     fetchData();
  }, []);


  return (

    
    <div className="table-responsive">
      
      <table className="table table-hover table-bordered">
        <thead className="table-secondary">
          <tr>
            {/* Cabeçalhos da tabela */}
            <th scope="col">Trade</th>
            <th scope="col">Qual foi seu resultado?</th>
            <th scope="col">Dia do Mês</th>
            <th scope="col">Hora da Operação</th>
            <th scope="col">Trade do Dia</th>
            <th scope="col">Ativo Operado</th>
            <th scope="col">Tipo de Operação</th>
            <th scope="col">Setup</th>
            <th scope="col">Trigger</th>
            <th scope="col">MMA9</th>
            <th scope="col">MMA20</th>
            <th scope="col">MMA20</th>
            <th scope="col">Qual o Tipo de Entrada?</th>
            <th scope="col">O Trade foi realizado?</th>
            <th scope="col">Setup de Stop</th>
            <th scope="col">Posição do seu Stop?</th>
            <th scope="col">Como foi a gestão do seu Stop?</th>
            <th scope="col">Qual foi o seu maior erro?</th>            
            <th scope="col">Resultado Monetário</th>
            <th scope="col">Resultado em Pontos</th>
            <th scope="col">Comentários</th>
              {/* Outras colunas conforme necessário */}
          </tr>
        </thead>
        <tbody>

        {tradeData.map(trade => (
            <TradeRow 
            key={trade.id}
            trade={trade} />
          ))}
        </tbody>
       
      </table>
      
      
      <div className="formulario-links mt-4">
      <Link to="/TradeForm" className="mx-2">Retornar ao Formulário</Link>
      </div>

    </div>
    
  );
};

TradeTable.propTypes = {
  trades: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string, // ou o tipo apropriado para 'id'
      trade: PropTypes.string,
      resultado: PropTypes.string,
      diaMes: PropTypes.string,
      Hora: PropTypes.string,
      tradeDia: PropTypes.string,
      AtivoOperado: PropTypes.string,
      TipoOperacao: PropTypes.string,
      Setup: PropTypes.string,
      GatilhoEntrada: PropTypes.string,
      MMA9: PropTypes.string,
      MMA20: PropTypes.string,
      MMA200: PropTypes.string,
      TipoEntrada: PropTypes.string,
      TradeRealizado: PropTypes.string,
      TipoStop: PropTypes.string,
      LocalStop: PropTypes.string,
      GestaoStop: PropTypes.string,
      QualoErro: PropTypes.string,   
      ResultadoMonetario: PropTypes.string,
      ResultadoEmPtos: PropTypes.string,
      Comentarios: PropTypes.string,// ou o tipo apropriado para 'trade'

    // outras propriedades...
    })
  ),
  
  
};

export default TradeTable;