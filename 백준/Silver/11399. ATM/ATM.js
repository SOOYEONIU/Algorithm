const fs = require('fs');
const { sourceMapsEnabled } = require('process');
let [[N], [...input]] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number))

const solution = (N, input) => {
    let totalSum = [];
    input.sort((a, b) => a - b);
    let sum = 0;
    for (let timeInfo of input) { 
        sum += timeInfo
        totalSum.push(sum);
    }
    let answer = 0;
    totalSum.map(value => answer += value);
    return answer;
}
console.log(solution(N, input));