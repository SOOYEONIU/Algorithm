const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

const solution = (T, C) => {// T: testcase 개수, C : 거스름돈
    let coin = [25, 10, 5, 1];
    for (let change of C) { 
        let answer = [0, 0, 0, 0];
        let temp = change;
        for (let i = 0; i < coin.length; i++) { 
            answer[i] = Math.floor(temp / coin[i])
            temp = temp % coin[i];

            if (temp === 0) break;
        }
        console.log(answer.join(' '));
    }
}
solution(input.shift(), input);