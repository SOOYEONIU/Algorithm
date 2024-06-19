const fs = require('fs');
let [[...S], i] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')

console.log(S[i-1])