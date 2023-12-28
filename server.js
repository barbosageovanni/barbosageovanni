require("dotenv").config({ path: 'variaveis.env' });

const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors()); // Ativa o CORS para todas as rotas
const routes = require('./routes');

// Configuração do CORS e Body Parser
app.use(express.json()); // Para analisar o JSON no corpo das requisições
app.use(express.urlencoded({ extended: true })); // Para analisar corpos codificados em URL

app.use('/api', routes); // Configuração da rota

// Definição da porta com um valor padrão como fallback
const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
