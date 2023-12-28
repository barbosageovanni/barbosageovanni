import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./diariotrader.css";
import NavbarDiario from "./NavbarDiario";
import UpdateTradeModal from "./UpdateTradeModal";
import TradeSearch from "./TradeSearch.jsx";
import TradeForm from "./TradeForm.jsx";

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

const apiURL = "https://suaapi.com/trade";

function DiarioTrader() {
  const [trades, setTrades] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTradeForEdit, setCurrentTradeForEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTrades();
  }, []);

  const fetchTrades = async () => {
    try {
      const authToken = await getAuth().currentUser.getIdToken();
      const response = await axios.get(apiURL, { headers: { 'Authorization': `Bearer ${authToken}` } });
      setTrades(response.data);
    } catch (error) {
      toast.error("Erro ao carregar trades.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = await getAuth().currentUser.getIdToken();
      const response = await axios.post(apiURL, formData, { headers: { 'Authorization': `Bearer ${authToken}` } });
      setTrades([...trades, response.data]);
      setFormData(initialFormState);
      toast.success('Trade adicionado com sucesso!');
    } catch (error) {
      toast.error("Erro ao adicionar trade.");
    }
  };

  const handleDelete = async (tradeId) => {
    try {
      const authToken = await getAuth().currentUser.getIdToken();
      await axios.delete(`${apiURL}/${tradeId}`, { headers: { 'Authorization': `Bearer ${authToken}` } });
      setTrades(trades.filter(trade => trade.id !== tradeId));
      toast.success('Trade excluído com sucesso!');
    } catch (error) {
      toast.error("Erro ao excluir trade.");
    }
  };

  const openEditModal = (trade) => {
    setCurrentTradeForEdit(trade);
    setIsModalOpen(true);
  };

  const handleUpdate = async (updatedTrade) => {
    try {
      const authToken = await getAuth().currentUser.getIdToken();
      const response = await axios.put(`${apiURL}/${updatedTrade.id}`, updatedTrade, { headers: { 'Authorization': `Bearer ${authToken}` } });
      setTrades(trades.map(trade => trade.id === updatedTrade.id ? response.data : trade));
      setIsModalOpen(false);
      toast.success('Trade atualizado com sucesso!');
    } catch (error) {
      toast.error("Erro ao atualizar trade.");
    }
  };

  const handleSelectTrade = (tradeId) => {
    const tradeToEdit = trades.find(trade => trade.id === tradeId);
    if (tradeToEdit) {
      setCurrentTradeForEdit(tradeToEdit);
      setIsModalOpen(true);
    }
  };

  

  const filteredTrades = trades.filter(trade => trade.trade.toString().includes(searchTerm));

  return (
    <div>
      <NavbarDiario />
      <header className="header-text center me-auto">
        <h5 className="sub-title-text-center">Bem-vindo(a) ao Diário de Trader!</h5>
      </header>  

      <div className="containerWindow containerWindowDark">
        <TradeSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TradeForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

        <div className="trades-list">
          {filteredTrades.map(trade => (
            <div key={trade.id} className="trade-item">
              <div>Trade ID: {trade.id}</div>
              <button onClick={() => handleSelectTrade(trade.id)} className="btn btn-small btn-selecionar">Selecionar</button>
              <button onClick={() => openEditModal(trade)} className="btn btn-small btn-editar">Editar</button>
              <button onClick={() => handleDelete(trade.id)} className="btn btn-small btn-excluir">Excluir</button>
            </div>
          ))}
        </div>

        <UpdateTradeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tradeData={currentTradeForEdit}
          onUpdate={handleUpdate}
        />
      </div>
     
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

export default DiarioTrader;
