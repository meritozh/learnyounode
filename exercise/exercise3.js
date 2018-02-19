/**
 * @description read file synchronously, return number of
 * lines to stdout
 */

const fs = require('fs');

const content = fs.readFileSync(process.argv[2], 'utf8');
const lines = content.split('\n').length;
console.log(lines - 1);