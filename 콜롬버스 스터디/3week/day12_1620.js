//map 활용
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const mn = input[0].split(' '); // n, m이 담긴 배열
const [n, m] = [parseInt(mn[0]), parseInt(mn[1])];

const map = new Map();

for (let i = 1; i <= n; i++) { 
    map.set(input[i], i); // 이름 => i번
}

for (let j = n+1; j <= n+m; j++) { // 문제의 개수만큼 반복
    if (isNaN(Number(input[j]))) { // 문자열 -> 숫자
        console.log(map.get(input[j]));
    } else { // 숫자 -> 문자열
        console.log(input[Number(input[j])]);
    }
}
