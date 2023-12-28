const db = require('../db');

// Em basicoServices.js
module.exports = {
    buscarTodos:  () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM tradetable' , (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });    
    },
    inserirTrade: (trade) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO tradetable (...) VALUES (...)', [...valores], (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results.insertId); // Retorna o ID do trade inserido
            });
        });
    }
};