var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var HOST = 'mysql',
    PORT = 3306,
    USER = 'skins4real',
    PASSWORD = 'password',
    DATABASE  = 'skins4real';

var connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});
connection.connect();

router.get('/', function (request, response, next) {
    connection.query('select * from deposit order by id desc limit 1000', function (err, rows, fields) {
        if (err) return console.log(err);
        response.json({
            'status'    : 'success',
            'count'     : rows.length,
            'data'      : rows
        })
    })
})

module.exports = router;