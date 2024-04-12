const fs = require('fs');
const input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split('\n');

let N = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a,b) => b - a).map((v) => BigInt(v));

let M = 0n;

if (N % 2 == 1) {
    M = arr.pop();
}

for (let i = 1; i < (N / 2); i++) { 
    let sum = arr.pop() + arr.shift(); 
    M = (sum > M) ? sum : M;
}

console.log(String(M));