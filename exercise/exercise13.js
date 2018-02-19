/**
 * @description HTTP server convert request query
 * field string to JSON format, then write to response
 */

const http = require('http');
const url  = require('url');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const urls = url.parse(req.url, true);
  const date = urls.query['iso'];
  const time = new Date(date);
  let result;
  if (urls.pathname === '/api/parsetime') {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
    
  } else if (urls.pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime(),
    }
  }
  res.end(JSON.stringify(result));
}).listen(process.argv[2]);