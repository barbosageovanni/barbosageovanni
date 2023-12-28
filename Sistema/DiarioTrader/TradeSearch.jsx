import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button'; // Importando o novo componente Button

function TradeSearch({ setSearchTerm, setTrades }) {
    const [searchInput, setSearchInput] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSearch = async () => {
        setErrorMsg('');
        try {
            const response = await axios.get(`https://suaapi.com/trades/search?term=${searchInput}`);
            setTrades(response.data);
            setSearchTerm(searchInput);
        } catch (error) {
            if (error.response) {
                // Erros de resposta do servidor
                setErrorMsg('Erro ao buscar trades: ' + error.response.statusText);
            } else if (error.request) {
                // Sem resposta do servidor
                setErrorMsg('Erro de conexão: verifique sua conexão com a internet.');
            } else {
                // Erros na configuração da requisição
                setErrorMsg('Erro desconhecido: tente novamente.');
            }
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Procurar Trade"
            />
            {errorMsg && <div className="error-message">{errorMsg}</div>}

            <Button 
                text="Buscar" 
                onClick={handleSearch}
                className="search-button" // Classe para estilos específicos, se necessário
            />
        </div>
    );
}

export default TradeSearch;
