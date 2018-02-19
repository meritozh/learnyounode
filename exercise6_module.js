const fs = require('fs');
const path = require('path');
/**
 * print files in specific path
 * @param {string} dir specific path
 * @param {string} ext filter files with ext
 * @param {(err?: Error, data: string[]) => void} callback how to print files
 */
const printFiles = (dir, ext, callback) => {
  ext = '.' + ext;
  fs.readdir(dir, (err, list) => {
    if (!err) {
      const files = list.filter((name) => {
        return path.extname(name) === ext;
      });
      callback(null, files);
    } else {
      callback(err, ["error occurs"]);
    }
  })
}

module.exports = printFiles;