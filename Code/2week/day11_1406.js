const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input.shift();
let commandNum = Number(input.shift());

let lStack = string.split(""); // 왼쪽 스택 [a, b, c, d]
let rStack = []; // 오른쪽 스택 []

for (let i = 0; i < commandNum; i++) { 
    let [cmd, value] = input[i].split(" ");
    if (cmd === 'L' && lStack.length) rStack.push(lStack.pop());
    else if (cmd === 'D' && rStack.length) lStack.push(rStack.pop());
    else if (cmd === 'B') lStack.pop();
    else if (cmd === 'P') lStack.push(value);
}

let result = lStack.join("");
result += rStack.reverse().join(""); // reverse+join으로 요소들의 위치를 뒤집어서 문자열로 바꾼 뒤 기존 문자열에 더해준다.
console.log(result);
