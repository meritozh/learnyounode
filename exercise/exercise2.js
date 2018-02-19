/**
 * @description accept arguments from CLI, then
 * print sum of them to stdout
 */

const inputs = process.argv.slice(2).map((value) => {
  return Number(value);
});

let sum = 0;
for(const i of inputs) {
  sum += i;
}

console.log(sum);