const mysql = require('mysql');

const config = {
    host: "localhost",
    port: "3306",
    user: "admin",
    password: "admin123",
    database: "irap"
}

const connection = mysql.createConnection(config);

connection.connect(function (error) {
    if (error) throw error;
    console.log("Conectado com sucesso!");

})

module.exports = connection;