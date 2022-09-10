const net = require("net");
const constants = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: constants.IP, // IP address here,
    port: constants.PORT // PORT number here,
  });

  // messages sent to server on connection
  conn.on('connect', () => {
    console.log('Connected Succesfully \n How to Play:\n Ctrl+C  exit game.\n w       move up\n a       move left\n s       move down\n d       move right\n 1       Say: Hi friend, glhf!\n 2       Say: Hola mi enemy\n 3       Say: I\'m Snake boss!\n\n If you idle for 5seconds, game over!');
    conn.write('Name: MMM');
  });

  // capture message sent by server
  conn.on('data', (data) => {
    console.log('Server message: ', data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;