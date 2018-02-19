/**
 * @description read contents of specific directory, filter
 * file name with given file extension, return remaining file
 * names to stdout
 */

const fs = require('fs');
const path = require('path');

const ext = '.' + process.argv[3];

fs.readdir(process.argv[2], (err, list) => {
  if (!err) {
    const files = list.filter((name) => {
      return path.extname(name) === ext;
    });
    for (const name of files) {
      console.log(name);
    }
  }
});
