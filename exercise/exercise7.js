/**
 * @description perform HTTP GET operation, write response's 
 * data to stdout when accept each `data` event
 */

const http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.on('data', console.log);
  res.on('error', console.error);
}).on('error', console.error);