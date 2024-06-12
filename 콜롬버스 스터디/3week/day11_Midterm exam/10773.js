const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let lineNum = input.shift(); // k

const stack = [];

for (let i = 0; i < lineNum; i++) { 
    if (Number(input[i]) != 0) { // 0이 아닐때
        stack.push(Number(input[i]));
    } else { // 0일 때
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
