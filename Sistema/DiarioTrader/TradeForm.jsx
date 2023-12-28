import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './TradeForm.css';
//import TradeTable from './TradeTable.jsx';
import EditModal from './EditModal.jsx'; // Importação correta se estiver na mesma pasta
//import Firebase from '../../Sistema/Config/firebase.js';
import 'firebase/firestore';



// Estado inicial do formulário
const initialFormState = {
  trade: '',
  Resultado: '',
  diaMes: '',
  Hora: '',
  tradeDia: '',
  AtivoOperado: '',
  TipoOperacao: '',
  Setup: '',
  GatilhoEntrada: '',
  MMA9: '',
  MMA20: '',
  MMA200: '',
  TipoEntrada: '',
  TradeRealizado: '',
  TipoStop: '',
  LocalStop: '',
  GestaoStop: '',
  QualoErro: '',
  ResultadoMonetario: '',
  ResultadoEmPtos: '',
  Comentarios: ''
};

function TradeForm({ trades, setTrades }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);  
  const [fieldToEdit, setFieldToEdit] = useState('');
  const [selectedTradeId, setSelectedTradeId] = useState('');
  const [currentValue, setCurrentValue] = useState('');
   
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
  
    // Formatação para o campo ResultadoMonetario
    if (name === "ResultadoMonetario") {
      updatedValue = formatCurrencyInput(value);
    }
  
    // Formatação e validação para o campo Hora
    if (name === "Hora") {
      updatedValue = formatTime(value);
    }
  
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleInsertClick = (fieldName) => {
    const updatedFormData = { ...formData, [fieldName]: "" };
    setFormData(updatedFormData);
};

const handleEditClick = (fieldName) => {
setCurrentValue(formData[fieldName]);
setFieldToEdit(fieldName);
setIsEditModalOpen(true);
};

const closeEditModal = () => {
  setIsEditModalOpen(false);
};


const handleSaveEdit = (updatedValue) => {
  setFormData({ ...formData, [fieldToEdit]: updatedValue });
  setIsEditModalOpen(false);
};

  // Exemplo de função de formatação de hora (ajuste conforme necessário)
  const formatTime = (timeValue) => {
    // Lógica para formatação de hora no formato 24 horas
  const timePattern = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (timePattern.test(timeValue)) {
    return timeValue;
  } else {
    // Trate valores de tempo inválidos aqui
    console.error("Formato de hora inválido");
    return ''; // Retorna string vazia ou um valor padrão se o formato estiver incorreto
  }
};
  const formatCurrencyInput = (value) => {
    let number = value.replace(/[^0-9.,]/g, '').replace(',', '.');
    return parseFloat(number).toFixed(2).replace('.', ',');
  };

  const validateForm = () => {
    if (!formData.tradeDia || !formData.AtivoOperado) {
      setErrorMsg('Erro: Preencha todos os campos obrigatórios.');
      return false;
    }
    return true;
  };

 async function handleSubmit(e) {
  e.preventDefault();
  if (!validateForm()) return;
  
  setIsLoading(true);
  try {
    // Supondo que processFormAction seja uma operação assíncrona
    await processFormAction();
    toast.success('Operação realizada com sucesso!');
  } catch (error) {
    console.error(error);
    toast.error('Ocorreu um erro ao realizar a operação.');
  } finally {
    setIsLoading(false);
  }
}

  const processFormAction = () => {
    if (formData.action === 'insert') {
      handleInsert();
    } else if (formData.action === 'update') {
      handleUpdate();
    } else if (formData.action === 'delete') {
      handleDelete();
    }
  };
  const handleInsert = () => {
    // Verificando se o array trades está definido
    if (!trades) {
      console.error('Array de trades não está definido.');
      return;
    }
  
    // Verificando se o trade atual já existe no array
    const existingTrade = trades.some(trade => trade.trade === formData.trade);
    if (existingTrade) {
      setErrorMsg('Erro: Um trade com este identificador já existe.');
      toast.error('Erro: Trade duplicado.');
      return;
    }
  
    // Adicionando o novo trade ao array
    const newTrade = { ...formData, id: trades.length + 1 };
    setTrades([...trades, newTrade]);
    setFormData(initialFormState);
    toast.success('Trade inserido com sucesso!');
  };

  const handleUpdate = () => {
    // Verificando se o array trades está definido
    if (!trades) {
      console.error('Array de trades não está definido.');
      return;
    }
  
    // Verificando se um trade foi selecionado para atualização
    if (!selectedTradeId) {
      setErrorMsg('Nenhum trade selecionado para atualização.');
      return;
    }
  
    // Atualizando o trade específico
    const updatedTrades = trades.map((trade) =>
      trade.id === selectedTradeId ? { ...trade, ...formData } : trade
    );
    setTrades(updatedTrades);
    setFormData(initialFormState);
    setSelectedTradeId(null);
    toast.success('Trade atualizado com sucesso!');
  };

  const handleDelete = () => {
    // Verificando se o array trades está definido
    if (!trades) {
      console.error('Array de trades não está definido.');
      return;
    }
  
    // Removendo o trade específico
    const updatedTrades = trades.filter(trade => trade.trade !== formData.trade);
    setTrades(updatedTrades);
    toast.success('Trade excluído com sucesso!');
  };


    // ... restante do código do componente

  
  return (
    
    
    <form onSubmit={handleSubmit} className="diario-trader-form">
          {errorMsg && <div className="error-message">{errorMsg}</div>}

      {/* Conteúdo do formulário */}
      <div className="containerWindow containerWindowDark">
          <div className="containerHeader ">
            <div className="containerHeaderLeft">
            <h6>Dados Gerais</h6>
            </div>
          </div>

      
        <div className="form-row">
          {/* Linha 1 */}
          <div className="form-group">
            <label htmlFor="tradeInput" className="form-label">Trade n°</label>
            <input
              type="number"
              className="form-control-trade"
              id="tradeInput"
              name="trade"
              placeholder='Digite o n° Trade'
              value={formData.trade}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
             <label htmlFor="ResultadoInput" className="form-label">Resultado?</label>
             <select
               type="text"
               className="form-control"
               id="ResultadoInput"
               name="Resultado"
               placeholder='Gain ou Loss?'
               value={formData.Resultado}
               onChange={handleInputChange} 
               >
                <option value="">Selecione uma opção</option>
                <option value="Gain">Gain</option>
                <option value="Loss">Loss</option>
            </select>
          </div>
          <div className="form-row">
          <div className="form-group">
            <label htmlFor="diaMesInput" className="form-label">Dia do Mês</label>
            <input
              type="date"
              className="form-control"
              id="diaMesInput"
              name="diaMes"
              value={formData.diaMes}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
          <label htmlFor="horaInput" className="form-label">Horário da Operação</label>
              <input
                type="time"
                className="form-control"
                id="horaInput"
                name="hora"
                value={formData.Hora}
                onChange={handleInputChange} />
              </div>
        </div>
       </div>
      <div className="form-row">
          <div className="form-group">
            <label htmlFor="tradeDiaInput" className="form-label">Trade do dia</label>
            <input
              type="number"
              className="form-control-tradeDia"
              id="tradeDiaInput"
              name="tradeDia"
              value={formData.tradeDia}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
           <label htmlFor="AtivoOperadoInput" className="form-label">Ativo Operado</label>
            <input
              type="text"
              className="form-control"
              id="AtivoOperadoInput"
              name="AtivoOperado"
              placeholder='Qual foi o ativo operado?'
              value={formData.AtivoOperado}
              onChange={handleInputChange} />
               <div className="botao-container-AtivoOperado">
              <button onClick={() => handleInsertClick('AtivoOperado')}className="btn btn-mini btn-primary">Inserir</button>
              <button onClick={() => handleEditClick('AtivoOperado')}className="btn btn-mini btn-alterar">Alterar</button>
            </div>
          </div>
          <div className="form-group">
          <label htmlFor="TipoOperacaoInput" className="form-label">Tipo de Operação</label>
            <select
              className="form-control"
              id="TipoOperacaoInput"
              name="TipoOperacao"
              value={formData.TipoOperacao}
              onChange={handleInputChange}
            >
                <option value="">Selecione uma opção</option>
                <option value="Compra">Compra</option>
                <option value="Venda">Venda</option>
            </select>
            </div>
      </div>

  {/* Linha 2 */}
          <div className="containerWindow containerWindowDark">
              <div className="containerHeader ">
                    <div className="containerHeaderLeft">
                    <h6>Detalhes do Trade</h6>
              </div>
          </div>
      <div className="form-row">
 
          <div className="form-group">
            <label htmlFor="SetupInput" className="form-label">Setup</label>
            <input
              type="text"
              className="form-control"
              id="SetupInput"
              name="Setup"
              placeholder='Digite e insira o seu Setup'
              value={formData.Setup}
              onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <label htmlFor="GatilhoEntradaInput" className="form-label">Trigger</label>
            <input
              type="text"
              className="form-control"
              id="GatilhoEntradaInput"
              name="GatilhoEntrada"
              placeholder='Qual foi o seu Trigger para entrada?'
              value={formData.GatilhoEntrada}
              onChange={handleInputChange} />
          </div>
        </div>
    </div>
        {/* Linha 3 */}
        
        <div className="form-row">
        <div className="form-group">
        <label htmlFor="MMA9Input" className="form-label">MMA9</label>
            <select
              className="form-control"
              id="MMA9Input"
              name="MMA9"
              value={formData.MMA9}
              placeholder='A favor, contra ou Flat'
              onChange={handleInputChange}
            >
                <option value="">Selecione uma opção</option>
                <option value="Compra">A Favor</option>
                <option value="Contra">Contra</option>
                <option value="Flat">Flat</option>
            </select>
          </div>
        <div className="form-group">
            <label htmlFor="MMA20Input" className="form-label">MMA20</label>
            <select
              type="text"
              className="form-control"
              id="MMA20Input"
              name="MMA20"
              placeholder='A favor, contra ou Flat'
              value={formData.MMA20}
              onChange={handleInputChange} 
            >
                 <option value="">Selecione uma opção</option>
                <option value="Compra">A Favor</option>
                <option value="Contra">Contra</option>
                <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="MMA200Input" className="form-label">MMA200</label>
            <select
              type="text"
              className="form-control"
              id="MMA200Input"
              name="MMA200"
              placeholder='A favor, contra ou Flat'
              value={formData.MMA200}
              onChange={handleInputChange} 
            >
                 <option value="">Selecione uma opção</option>
                <option value="Compra">A Favor</option>
                <option value="Contra">Contra</option>
                <option value="Flat">Flat</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="TipoEntradaInput" className="form-label">Tipo de Entrada</label>
            <select
              type="text"
              className="form-control"
              id="TipoEntradaInput"
              name="TipoEntrada"
              placeholder='Insira como foi a sua Entrada'
              value={formData.TipoEntrada}
              onChange={handleInputChange} 
              >
                <option value="">Selecione uma opção</option>
                <option value="AMercado">A Mercado</option>
                <option value="OrdemLimitada">Ordem Limitada </option>
                <option value="OrdemStop">Ordem Stop</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="TradeRealizadoInput" className="form-label">O Trade foi realizado?</label>
            <select
              type="text"
              className="form-control"
              id="TradeRealizadoInput"
              name="TradeRealizado"
              placeholder='Sim ou Não'
              value={formData.TradeRealizado}
              onChange={handleInputChange} 
              >
                <option value="">Selecione uma opção</option>
                <option value="Sim">Sim</option>
                <option value="Nao">Não</option>
            </select>
          </div>
        </div>
      </div>

          {/* Linha 4 */}
          <div className="containerWindow containerWindowDark">
          <div className="containerHeader ">
            <div className="containerHeaderLeft">
            <h6>Gerenciamento de Stop</h6>
            </div>
          </div>
          

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="TipoStopInput" className="form-label">Setup de Stop?</label>
              <input
                type="text"
                className="form-control"
                id="TipoStopInput"
                name="TipoStop"
                placeholder='Digite e insira o seu Setup'
                value={formData.TipoStop}
                onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="LocalStopInput" className="form-label">Posição do seu Stop?</label>
              <select
                type="text"
                className="form-control"
                id="LocalStopInput"
                name="LocalStop"
                placeholder='Digite e insira o local'
                value={formData.LocalStop}
                onChange={handleInputChange} 
                >
                <option value="">Selecione uma opção</option>
                <option value="Barra">Barra de Entrada</option>
                <option value="UltimoTopo">Ultimo Topo</option>
                <option value="UltimoFundo">Ultimo Fundo</option>
                <option value="RetracaoDeFibo">Retração de Fibo</option>
                <option value="MMA9">MMA9</option>
                <option value="MMA20">MMA20</option>
                <option value="Pullback">Pullback</option>
            </select>
            </div>
            <div className="form-group">
              <label htmlFor="GestaoStopInput" className="form-label">Como foi a gestão do seu Stop?</label>
              <input
                type="text"
                className="form-control"
                id="GestaoStopInput"
                name="GestaoStop"
                placeholder='Digite e insira a sua Gestão'
                value={formData.GestaoStop}
                onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="QualoErroInput" className="form-label">Qual foi o seu maior erro?</label>
              <select
                type="text"
                className="form-control"
                id="QualoErroInput"
                name="QualoErro"
                placeholder='Digite e insira o seu maior erro'
                value={formData.QualoErro}
                onChange={handleInputChange} 
                >
                <option value="">Selecione uma opção</option>
                <option value="MedoPerderOportunidade">Medo de perder oportunidade</option>
                <option value="StopMalPosicionado">Stop Gain mal posicionado</option>
                <option value="Ansiedade">Ansiedade para boletar</option>
                <option value="Distração">Distração e Falta de Atenção</option>
                <option value="StopCurto">Stop curto</option>
                <option value="Ganancia">Ganância</option>
                <option value="EntradaAtrasada">Entrada Atrasada</option>
                <option value="EntradaAntecipada">Entrada Antecipada</option>
                <option value="TriggerCorreto">Não esperei o trigger correto</option>
                <option value="Contexto">Erro na analise do contexto</option>
                <option value="StopCurtoMedo">Coloquei o Stop curto por medo </option>
              </select>
            </div>
          </div>
        </div>
            {/* Linha 5 */}

            <div className="containerWindow containerWindowDark">
              <div className="containerHeader ">
                <div className="containerHeaderLeft">
                <h6>Resultado diário</h6>
              </div>
           </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="ResultadoMonetarioInput" className="form-label">Resultado Monetário?</label>
                <input
                  type="number"
                  className="form-control"
                  id="ResultadoMonetarioInput"
                  name="ResultadoMonetario"
                  placeholder='Digite e insira o seu resultado'
                  value={formData.ResultadoMonetario}
                  onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ResultadoEmPtosInput" className="form-label">Resultado em Pontos?</label>
                <input
                  type="number"
                  className="form-control"
                  id="ResultadoEmPtosInput"
                  name="ResultadoEmPtos"
                  placeholder='Digite a quantidade de pontos'
                  value={formData.ResultadoEmPtos}
                  onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ComentariosInput" className="form-label">Comentários sobre a operação</label>
                <textarea
                  className="form-control"
                  rows="10"
                  cols="20"
                  id="ComentariosInput"
                  name="Comentarios"
                  placeholder='Escreva seus comentários da operação'
                  value={formData.Comentarios}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

          </div>
         
            <button type="submit" className="btn btn-small btn-submit" disabled={isLoading}>
              {isLoading ? 'Salvando...' : 'Salvar Trade'}
            </button>
            <button type="button" className="btn btn-small btn-insert" onClick={handleInsert}>
              Inserir Trade
            </button>
            <button type="button" className="btn-alterar" onClick={handleUpdate}>
              Alterar Trade
            </button>
            <button type="button" className="btn-excluir" onClick={handleDelete}>
              Excluir Trade
            </button>

            <EditModal 
        isOpen={isEditModalOpen} 
        fieldName={fieldToEdit} 
        currentValue={currentValue}
        onSave={handleSaveEdit}
        closeEditModal={closeEditModal}
      />


    </form>

    
  );
}

export default TradeForm;