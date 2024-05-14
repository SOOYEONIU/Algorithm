const fs = require('fs');
const n = +fs.readFileSync(__dirname + '/input.txt').toString().trim();

let arr = new Array(1001);
const solution = (N) => { 
    arr[1] = 1;
    arr[2] = 3;
    for (let i = 3; i <= N; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 2]) % 10007;
    }
    return arr[N];
}

console.log(solution(n));