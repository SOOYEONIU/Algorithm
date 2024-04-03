const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const mn = input[0].split(' ');

const [n, m] = [parseInt(mn[0]), parseInt(mn[1])];

const dogam = {};

for (let i = 1; i <= n; i++) { 
    dogam[i] = input[i];
}

let result = '';

for (let i = n+1; i <= n + m; i++) { 
    if (isNaN(parseInt(input[i]))) { // 포켓몬 이름일 때
        for (let number in dogam) {
            if (dogam[number] == input[i]) {
                result += number + '\n';
                break;
            } 
        }
    } else { // 숫자일 때
        for (let number in dogam) {
            if (number == input[i]) {
                result += dogam[number] + '\n';
                break;
            } 
        } 
    }
}

console.log(result);
