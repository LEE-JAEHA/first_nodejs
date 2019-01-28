const mysql = require('mysql');
/*
    DB구축
*/
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'study_javascript'
  });
connection.connect();

module.exports = connection;