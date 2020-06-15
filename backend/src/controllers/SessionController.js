const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { email, pass } = request.body;

        connection.query(`SELECT * FROM usuario WHERE email = "${email}" AND senha = md5("${pass}")`, function (error, result) {
            if (error) throw error;
            response.send(result);
        });
    }
}