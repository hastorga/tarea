'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//app.get('/', (req, res) => res.send('Hello World!'));

// RUTAS 
app.get('/hola', (req, res) => res.send('Hola! Bienvenido'));

app.get('/contacto', (req, res) => res.send('Contactame a hm.astorga@gmail.com'));




// conexión 

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "barracuda132"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/bd",function(req,res){
  connection.query('SELECT * from worker', function(err, rows, fields) {
  connection.end();
    if (!err){
      console.log('The solution is: ', rows),
      res.send(rows);
    }else
      console.log('Error while performing Query.');
    });
  });

app.use(express.static('assets'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));



app.listen(80, () => console.log('Example app listening on port 80!'));