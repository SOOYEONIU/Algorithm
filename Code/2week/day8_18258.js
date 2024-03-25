const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const queue = [];

let i = 1;
while (i <= input[0]) { 
    let inputData = [];
    inputData = input[i].split(' ');

    switch ( inputData[0] ) { 
        case 'push':
            queue.push(inputData[1]);
            break;
        case 'pop':
            queue.length ? console.log(queue.shift()) : console.log(-1);
            break;
        case 'size':
            console.log(queue.length);
            break;
        case 'empty':
            queue.length ? console.log(0) : console.log(1);
            break;
        case 'front':
            queue.length ? console.log(queue[0]) : console.log(-1);
            break;
        case 'back':
            queue.length ? console.log(queue[queue.length - 1]) : console.log(-1);
            break;
    }
    i++;
}// while 반복문
