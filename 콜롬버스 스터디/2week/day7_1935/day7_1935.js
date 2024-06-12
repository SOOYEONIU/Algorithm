const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let iterator = Number(input.shift());
let strSentence = input.shift().split('');
//['A', 'B', 'C', '*', '+', 'D', 'E', '/', '-']

input = input.map((item) => Number(item));

const map = new Map;

for (let i = 0; i < iterator; i++) { 
    map.set(String.fromCharCode(i + 65), input[i]); // Map 요소 추가 
    //{ 'A' => 1, 'B' => 2, 'C' => 3, 'D' => 4, 'E' => 5 }
}

const operators = ["+", "-", "*", "/"];

const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

let stack = [];

const numWithStr = strSentence.map((item) => operators.includes(item) ? item : map.get(item)); 

for (let i = 0; i < strSentence.length; i++) { 
    let singleStr = numWithStr[i];

    if (operators.includes(singleStr)) { 
        let backNum = stack.pop();
        let frontNum = stack.pop(); 

        let calcFunc = calculator[singleStr];

        singleStr = calcFunc(frontNum, backNum);
    }
    stack.push(singleStr);
}
console.log(stack[0].toFixed(2));
