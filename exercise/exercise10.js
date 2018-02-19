/**
 * @description listen each TCP connection, then write
 * current time to it
 */

const net = require('net');

const port = process.argv[2];
const date = new Date();

net.createServer((socket) => {
  let data = date.getFullYear().toString() + '-';
  const month = date.getMonth() + 1;
  data += (month < 10 ? '0' : '') + month + '-';
  data += date.getDate() + ' ';
  data += date.getHours() + ':';
  data += date.getMinutes() + '\n';
  socket.end(data);
}).listen(port);