const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split("\n");

const N = Number(input.shift());

let distanceNum = input.shift().split(' ').map(Number);
let priceInfo = input[0].split(' ').map(Number);

let result = 0;

for (let i = 0; i < N; i++) { 
    if (i == N - 1) {
        break;
    } else if (i == 0) {
        result += priceInfo[i] * distanceNum[i];
    } else if(i > 0) { 
        if (priceInfo[i - 1] < priceInfo[i]) {
            result += priceInfo[i - 1] * distanceNum[i];
        } else {
            result += priceInfo[i] * distanceNum[i];
        }
    }
} // for
console.log(result);