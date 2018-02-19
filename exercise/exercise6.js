/**
 * @description module version, read contents of specific directory, filter
 * file name with given file extension, return remaining file
 * names to stdout
 */

const printFiles = require('./exercise6_module')

printFiles(process.argv[2], process.argv[3], (err, files) => {
  if (!err) {
    for (const name of files)
      console.log(name);
  } else {
    console.log(files[0]);
  }
});