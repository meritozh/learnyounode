/**
 * @description HTTP server read given file path
 */

const http = require('http');
const fs   = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  fs.createReadStream(filePath).pipe(res);
}).listen(port);