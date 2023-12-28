const express = require("express");
const router = express.Router();


const basicoController = require('./controllers/basicoController');

// Exemplo de rota GET
router.get('/tradetable', basicoController.buscarTodos);

// Exemplo de rota POST
router.post('/tradetable', basicoController.inserirTrade);

// Você pode adicionar mais rotas conforme necessário

module.exports = router;

