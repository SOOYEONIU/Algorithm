const fs = require('fs');
const filePath = process.platform == 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let [N, M, input] = fs.readFileSync(filePath).toString().trim().split('\n');
const ingredientBox = input.split(' ');

let count = 0;
for (let i = 0; i < N; i++) { 
    for (let j = i+1; j < N; j++) { 
        let sum = Number(ingredientBox[i]) + Number(ingredientBox[j]);
        if (sum === Number(M)) {
            count++;
        }
    }
}

console.log(count);
