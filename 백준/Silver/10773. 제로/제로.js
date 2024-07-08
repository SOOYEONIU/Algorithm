const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let lineNum = input.shift();

const stack = [];

for (let i = 0; i < lineNum; i++) { 
    if (Number(input[i]) != 0) {
        stack.push(Number(input[i]));
    } else { 
        stack.pop();
    }
}

let result = 0;
if (stack.length == 0) {
    result = 0;
} else { 
    for (let i = 0; i < stack.length; i++) { 
        result += stack[i];
    }
}
console.log(result);