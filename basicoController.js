const basicoServices = require('../services/basicoServices');


module.exports = {

    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};
        
        let diariotrader_novo = await basicoServices.buscarTodos();

        for(let i in diariotrader_novo){
            json.result.push({
                diaMes: diariotrader_novo[i].diaMes,
                dataHora: diariotrader_novo[i].dataHora,
                
            });
        }
        res.json(json);
    },
    inserirTrade: async (req, res) => {
        let json = {error:'', result:[]};

        let trade = req.body; // Obtém os dados do trade do corpo da requisição

        try {
            // Chama a função de serviço para inserir o trade no banco de dados
            let tradeId = await basicoServices.inserirTrade(trade);
            json.result = {
                id: tradeId,
                ...trade
            };
        } catch(error) {
            json.error = 'Erro ao inserir trade';
        }

        res.json(json);
    }

}
