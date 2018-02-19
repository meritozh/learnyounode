/**
 * @description HTTP server write incoming characters
 * with upper-case version to response
 */

const http = require('http');

const port = process.argv[2];

http.createServer((req, res) => {
  req.on('data', (chunk) => {
    const data = chunk.toString().toUpperCase();
    res.end(data);
  });
}).listen(port);