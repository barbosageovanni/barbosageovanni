// UpdateTradeModal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Botao from './Botao'; // Importando o componente Botao

function UpdateTradeModal({ isOpen, onClose, tradeData, tradeId }) {
  // Inicializando com um objeto vazio para evitar problemas de null
  const [editFormData, setEditFormData] = useState(tradeData || {});
  const [erro, setErro] = useState('');

  useEffect(() => {
    // Verificando se tradeData não é null antes de definir o estado
    if (tradeData) {
      setEditFormData(tradeData);
    }
  }, [tradeData]);

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificando se os campos obrigatórios estão preenchidos
    if (!editFormData.trade || !editFormData.diaMes) {
      setErro('Campos obrigatórios não preenchidos.');
      return;
    }

    try {
      const response = await axios.put(`https://api.example.com/trades/${tradeId}`, editFormData);
      console.log("Documento escrito com ID: ", response.data); // Tratar o retorno conforme necessário
      onClose(); // Fechar o modal após atualização bem-sucedida
    } catch (error) {
      setErro('Erro ao atualizar os dados: ' + error.message);
    }
  };

  if (!isOpen) return null; // Não renderiza nada se o modal não está aberto

    return (
        <div className="modal">
            <div className="modal-content">
                <Botao texto="&times;" onClick={onClose} className="close" />
                <form onSubmit={handleSubmit}>
                    {/* Campos do formulário */}
            <input
                type="text"
                name="trade"
                value={editFormData.trade || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="Resultado"
                value={editFormData.Resultado || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="date"
                name="diaMes"
                value={editFormData.diaMes || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
             <input
                type="time"
                name="hora"
                value={editFormData.Hora || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />    

            <input
                type="number"
                name="tradeDia"
                value={editFormData.tradeDia || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="AtivoOperado"
                value={editFormData.AtivoOperado || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="TipoOperacao"
                value={editFormData.TipoOperacao || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="Setup"
                value={editFormData.Setup || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="GatilhoEntrada"
                value={editFormData.GatilhoEntrada || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
                <input
                type="text"
                name="MMA9"
                value={editFormData.MMA9 || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="MMA20"
                value={editFormData.MMA20 || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="MMA200"
                value={editFormData.MMA200 || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />

            <input
                type="text"
                name="TipoEntrada"
                value={editFormData.TipoEntrada || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="TradeRealizado"
                value={editFormData.TradeRealizado || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="TipoStop"
                value={editFormData.TipoStop || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="LocalStop"
                value={editFormData.LocalStop || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="GestaoStop"
                value={editFormData.GestaoStop || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="text"
                name="QualoErro"
                value={editFormData.QualoErro || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="currency"
                name="ResultadoMonetario"
                value={editFormData.ResultadoMonetario || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
            <input
                type="number"
                name="ResultadoEmPtos"
                value={editFormData.ResultadoEmPtos || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
                <input
                type="text"
                name="Comentarios"
                value={editFormData.Comentarios || ''}
                onChange={handleEditFormChange}  // Usando a função aqui
                />
                    {/* ... */}
                    {erro && <div className="error-message">{erro}</div>}
                     <Botao texto="Salvar Alterações" type="submit" className="submit-button" />
                </form>
            </div>
        </div>
    );
}

export default UpdateTradeModal;
