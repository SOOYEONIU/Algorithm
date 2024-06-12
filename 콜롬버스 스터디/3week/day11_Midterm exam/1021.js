const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ');
let numList = input[1].split(' ');

const queue = [];

for (let i = 1; i <= n; i++) { 
    queue.push(i);
}

let count = 0; //연산수

for (let i = 0; i < m; i++) { 
    let numIndex = queue.indexOf(Number(numList[i]));
    
    while (numList[i] != queue[0]) { 
        if (numIndex <= queue.length / 2) {
            let qf = queue[0];
            queue.shift();
            queue.push(qf);
            count++;
        }
        else if (numIndex >= queue.length / 2) {
            let ql = queue[queue.length - 1];
            queue.pop();
            queue.unshift(ql);
            count++;
        }
    }
    if (numList[i] == queue[0]) { 
        queue.shift();
    }
}
console.log(count);
