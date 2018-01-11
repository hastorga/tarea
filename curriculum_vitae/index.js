'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//app.get('/', (req, res) => res.send('Hello World!'));
app.get('/hola', (req, res) => res.send('Hola! Bienvenido'));

app.get('/contacto', (req, res) => res.send('Contactame a hm.astorga@gmail.com'));

app.listen(80, () => console.log('Example app listening on port 80!'));


// conexion 

var mysql = require('mysql');

var con = mysql.createConnection({
  database: "workers",
  host: "localhost",
  user: "root",
  password: "barracuda132"
});

app.get("/bd",function(req,res){
    con.query('SELECT * from worker', function(err, rows, fields) {
    con.end();
      if (!err){
        console.log('The solution is: ', rows),
        res.send(rows);
      }else
        console.log('Error while performing Query.');
      });
    });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.static('assets'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


// Esto es un comentario