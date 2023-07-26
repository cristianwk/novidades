const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'br540.hostgator.com.br',
    user: 'importados',
    password: 'lojaimportados',
    database: 'cons0645_lojaimportados'
});

module.exports = conexao;