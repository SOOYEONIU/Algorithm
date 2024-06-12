const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = Number(input[0]);
const K = Number(input[1]);
const numbers = new Array(Number(input[0]) + 1);

let primeNumber;

const count = [];

for (let i = 2; i < numbers.length; i++) { 
    if (numbers[i] !== 0) {
        primeNumber = i;
        numbers[i] = 0;
        count.push(i);
        for (let j = i + i; j <= N; j += i) {
            if (numbers[j] === 0) {
                continue;
            }
            numbers[j] = 0;
            count.push(j);
        }
    } else { 
        continue;
    }
}
console.log(count[K - 1]);
