const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});// création du serveur à l'adresse 3000


const index = require("./routes/index"); 
app.use(index);// permets d'envoyer dans notre serveur les informations voulues

//app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/index.html');
//});


var passages = {
    
} //création de la variable de compteur de passages qui va accueillir toutes les valeurs différentes



/*
const { readFileSync, writeFileSync } = require('fs');
const data = readFileSync('./passages.json');
var passages = JSON.parse(data);
console.log('passages', passages)
writeFileSync('./passages.json', JSON.stringify(passages, null, 2), 'utf8');
*/

io.on('connection', (socket) => {
  console.log('a user connected');


  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('passages', (msg) => {
    console.log(msg)
    passages[msg['gpio']] = msg['nb'];
    console.log('passages: ' + msg);
    console.log(passages);
    io.emit('passages', passages);
  });


}); // quand un message est reçu par le serveur, le serveur émet le message, et quand c'est le compteur de passages qui est reçu, on ajoute le nombre de passages à notre variable de passages, qui contient les nombres de passages de chaque programme read (qu'on additionnera à la fin pour avoir le total)


server.listen(8081, () => {
  console.log('listening on *:8081');
});
// le serveur écoute ce qui est émit à l'adresse 8081, cad les compteurs de passages des programmes de read