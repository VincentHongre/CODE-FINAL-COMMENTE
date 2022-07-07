const { io } = require("socket.io-client"); 

const socket = io("ws://localhost:8081", {
  reconnectionDelayMax: 10000,
  auth: {
    token: "12"
  },
  query: {
    "gpio": "gpio12"
  }
}); //Cette partie correspond à l'envoi au port wifi local 8081, c'est à dire l'adresse que va surveiller notre serveur. Le token permet de savoir à quel pin nous avons affaire

var gpio = require('rpi-gpio'); //variable pour lire le pin du raspberry. rpi-gpio est la bibliothèque que nous utilisons pour lire ces pins.

gpio.setup(12, gpio.DIR_IN, gpio.EDGE_BOTH); //nous disons au programme que le pin 12 est un pin de lecture

var passages = 0;//nous créons la variable de passages DU PIN 12, qui sera envoyée et ensuite additionnée aux autres variables des pins de lecture pour donner le nombre total de passages

gpio.on('change', function(channel, value) { //Nous disons concrètement "au changement de valeur du pin, faites ces actions"
  console.log('Channel ' + channel + ' value is now ' + value);
  if (value === false) { //Si la valeur du pin repasse à false, nous incrémentons le passage de 1 et nous émettons au serveur le nombre de passages de ce pin et le numéro de ce pin
    passages = passages + 1;
    socket.emit("passages", {"nb": passages, "gpio": "gpio12"});
  }
  console.log(passages);
});
