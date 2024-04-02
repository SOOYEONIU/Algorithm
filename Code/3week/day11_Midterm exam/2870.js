const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let lineNum = input.shift();

let totalArray = [];
for (let i = 0; i < lineNum; i++) { 
    let string = '';
    for (let j = 0; j < input[i].length; j++) {
        if (!isNaN(parseInt(input[i][j]))) {
            string += input[i][j];
        } else if (isNaN(parseInt(input[i][j]))) {
            if (string.length > 0) {
                totalArray.push(BigInt(string));
            }
            string = '';
        }
    }
    if (string.length > 0) { 
        totalArray.push(BigInt(string));
    }
}

totalArray.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
console.log(totalArray.join('\n').trim());
