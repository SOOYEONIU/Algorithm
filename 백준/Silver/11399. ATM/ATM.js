const fs = require('fs');
const { sourceMapsEnabled } = require('process');
let [[N], [...input]] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number))

const solution = (N, input) => {
    let answer = [];
    input.sort((a, b) => a - b);
    let sum = 0;
    for (let timeInfo of input) { 
        sum += timeInfo
        answer.push(sum);
    }
    let totalSum = 0;
    answer.map(value => totalSum += value);
    return totalSum;
}
console.log(solution(N, input));