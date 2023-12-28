

const mysql = require('mysql');

// Verifica se todas as variáveis de ambiente necessárias estão definidas
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
    console.error("Erro: Variáveis de ambiente de banco de dados não definidas");
    process.exit(1); // Sai do processo se alguma variável de ambiente estiver faltando
}

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Estabelece a conexão e trata possíveis erros
connection.connect(error => {
    if (error) {
        console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
        return;
    }
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`);
});

module.exports = connection;
