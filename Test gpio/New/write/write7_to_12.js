var gpio = require('rpi-gpio');//variable pour lire le pin du raspberry. rpi-gpio est la bibliothèque que nous utilisons pour lire ces pins.

gpio.setup(7, gpio.DIR_OUT, write);//nous disons au programme que le pin 12 est un pin d'écriture

function writetrue() {
  gpio.write(7, true, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writefalse, 5000);
  });
}//mise à true du pin, avec un timer de 5s


function writefalse() {
  gpio.write(7, false, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writetrue, 5000);
  });
}// mise à false du pin, avec un timer de 5s

function write(err) {
  if (err) throw err;
  gpio.write(7, true, function(err) {
    if (err) throw err;
    console.log('Written to pin');
    setTimeout(writefalse, 5000);
  });
}
