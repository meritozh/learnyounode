/**
 * @description collect three response's data from
 * three URLs, print all data to stdout, but keep
 * order as provided URLs'
 */

const http = require('http');
const bl = require('bl');

const datas = ['', '', ''];
let numRes = 0;

http.get(process.argv[2], (res) => {
  res.pipe(bl((err, data) => {
    datas[0] = data.toString();
    numRes += 1;
    if (numRes === 3) {
      console.log(datas.join('\n'));
    }
  }));
});

http.get(process.argv[3], (res) => {
  res.pipe(bl((err, data) => {
    datas[1] = data.toString();
    numRes += 1;
    if (numRes === 3) {
      console.log(datas.join('\n'));
    }
  }));
});

http.get(process.argv[4], (res) => {
  res.pipe(bl((err, data) => {
    datas[2] = data.toString();
    numRes += 1;
    if (numRes === 3) {
      console.log(datas.join('\n'));
    }
  }));
});