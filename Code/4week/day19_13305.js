const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split("\n");

const N = Number(input.shift());

let distanceNum = input[0].split(' ').map((v) => BigInt(v));
let priceInfo = input[1].split(' ').map((v) => BigInt(v));

console.log(distanceNum, priceInfo)

let result = 0n;
let currentPrice = priceInfo[0];

for (let i = 0; i < N - 1; i++) {
    result += currentPrice * distanceNum[i];

    currentPrice = currentPrice > priceInfo[i + 1] ? priceInfo[i + 1] : currentPrice;
} // for
console.log(String(result));