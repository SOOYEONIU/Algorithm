const fs = require("fs");
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split("\n");

let N = Number(input.shift());

input.sort((a, b) => b - a);
let tipArr = input.map(Number);
console.log(tipArr)

let totalTip = 0;
for (let i = 0; i < N; i++) { 
    let tipCount = tipArr[i] - i > 0 ? (tipArr[i] - i) : 0;; 
    totalTip += tipCount;
}
console.log(totalTip);
