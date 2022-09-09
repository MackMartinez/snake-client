const { stdin } = require("process");

const handleUserInput = function () {
  // your code here
  // stdin.setRawMode(true);
  // stdin.setEncoding('utf8');

  process.stdin.on('data', (data) => {
    
    if (data === '\u0003') {
      process.exit();
    } else if (data === 'w') {
      connection.write('Move: up');
    } else if (data === 'a') {
      connection.write('Move: left');
    } else if (data === 's') {
      connection.write('Move: down');
    } else if (data === 'd') {
      connection.write('Move: right');
    }
  });
};

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

stdin.on("data", handleUserInput);


module.exports = setupInput;
