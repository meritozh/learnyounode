/**
 * @description collect all response's data, then print
 * number of characters of all data and and all data as
 * one string
 */

const bl = require('bl');
const http = require('http');

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.pipe(bl((err, data) => {
    const str = data.toString();
    console.log(str.length);
    console.log(str);
  }));
});