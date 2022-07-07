const { io } = require("socket.io-client");

const socket = io("ws://localhost:8081", {
  reconnectionDelayMax: 10000,
  auth: {
    token: "22"
  },
  query: {
    "gpio": "gpio22"
  }
});

var gpio = require('rpi-gpio');

gpio.setup(22, gpio.DIR_IN, gpio.EDGE_BOTH);

var passages = 0;

gpio.on('change', function(channel, value) {
  console.log('Channel ' + channel + ' value is now ' + value);
  if (value === false) {
    passages = passages + 1;
    socket.emit("passages", {"nb": passages, "gpio": "gpio22"});
  }
  console.log(passages);
});
