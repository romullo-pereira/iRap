const connection = require('../database/connection');
const { connect } = require('../database/connection');

const Usuario = {
    async index(request, response) {
        connection.query('SELECT nome, email, senha FROM usuario', function (error, result) {
            if (error) throw error;
            response.send(result)
        });
    },

    async create(request, response) {
        const { name, email, pass } = request.body;

        sql = 'INSERT INTO usuario (nome, email, senha , isAdmin) VALUES (?, ?, md5(?) , 0)';

        connection.query(sql, [name, email, pass], function (error, result) {
            if (error) throw error;
            response.send(result);
        });
    },
}

module.exports = Usuario;