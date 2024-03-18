const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync( filePath ).toString().trim().split('\n');

let [sum, inputNum] = [0, parseInt(input[0])];

for ( let i = 0; i < inputNum; i++) {
    sum += parseInt(input[1][i]);
}
console.log(sum);
