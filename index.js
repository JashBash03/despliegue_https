const express = require('express');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const {getMessages, addMessage} = require('./database.js');

const APIKEY = "123456";

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
})

app.get('/message', (req, res) => {    
   // Devolver mensajes alamacenados en la BBDD
   const apikey = req.headers['apikey'];
   if (apikey !== APIKEY){
     return res.status(401).send('Unauthorized');
   }
   res.json(getMessages());
})

app.post('/message', (req, res) => {    
   // Guardar mensajes en la BBDD
   const apikey = req.headers['apikey'];
  if (apikey !== APIKEY) {
    return res.status(401).send('Unauthorized');
  }
  const message = req.body.message;
  if (message) {
    addMessage(message);
    res.status(201).send('Message added');
  } else {
    res.status(400).send('Bad Request');
  }
})

app.get('/testeo', (req, res) => {
  const objeto = {
      mensaje: "Hola, soy Javi"
  };
  res.json(objeto);
});

if (process.env.NODE_ENV === 'production') {
  const options = {
    key: fs.readFileSync(path.join(__dirname, 'privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'fullchain.pem'))
  };
  https.createServer(options, app).listen(3000, () => {    
    console.log('Servidor corriendo en https://dev2.cyberbunny.online:3000');
  });
} else {
  http.createServer(app).listen(3000, () => {    
    console.log('Servidor corriendo en http://localhost:3000');
  });
}