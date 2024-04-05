const fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [N, M, input] = fs.readFileSync(filePath).toString().trim().split('\n');
const ingredientBox = input.split(' ');
M = Number(M);

ingredientBox.sort((a, b) => a - b)
let numberBox = ingredientBox.map(Number);

let count = 0;

let frontData = numberBox.shift();
let backData = numberBox.pop();

while (numberBox.length > 0) { 
    const sum = frontData + backData;
    if (sum === M) {
        count++;
        frontData = numberBox.shift();
        backData = numberBox.pop();
    } else if (sum < M) {
        frontData = numberBox.shift();
    } else { 
        backData = numberBox.pop();
    }
}
if (frontData + backData == M) { 
    count++;
}

console.log(count);
