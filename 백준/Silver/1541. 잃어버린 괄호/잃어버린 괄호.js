const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('-')
    .map((value) => { 
        let newItem = value.split("+");
        return newItem.reduce((a, b) => Number(a) + Number(b), 0);
    })

console.log(input.reduce((a, b) => a - b));