const connection = require('../database/connection');


const Postagem = {

    async index(request , response) {
        connection.query('SELECT postagem.* , nome FROM postagem JOIN usuario ON usuario.idUsuario = postagem.fkUsuario ORDER BY idPostagem DESC', function (error, result) {
            if (error) throw error;
            response.send(result)
        });
    },

    async indexAsc(request , response) {
        connection.query('SELECT postagem.* , nome FROM postagem JOIN usuario ON usuario.idUsuario = postagem.fkUsuario ORDER BY idPostagem ASC', function (error, result) {
            if (error) throw error;
            response.send(result)
        });
    },

    async show(request , response) {
        const id = request.params.id;

        connection.query(`SELECT postagem.* , nome FROM postagem JOIN usuario ON usuario.idUsuario = postagem.fkUsuario WHERE idPostagem = ${id}` , function (error , result) {
            if (error) throw error;
            response.send(result);
        });
    },

    async showIndex(request , response) {

        const numLimit = request.params.limit;
        
        const sql = `SELECT * FROM postagem ORDER BY idPostagem DESC LIMIT ${numLimit}`
        connection.query(sql ,function (error , result) {
            if(error) throw error;
            response.send(result);
        })
    },

    async create(request , response) {
        const { title , desc , imagem , content , idUser} = request.body;

        const sql = 'INSERT INTO postagem (titulo , descricao , imagem , conteudo , fkUsuario , dataCadastro) values (? , ? , ? , ? , ? , now())';

        const data = [title , desc , imagem , content  , idUser];

        connection.query(sql , data , function (error , result) {
            if (error) throw error;
            response.send(result);
        });
    }
}

module.exports = Postagem;