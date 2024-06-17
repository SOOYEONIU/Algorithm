const fs = require('fs');
const { sourceMapsEnabled } = require('process');
let [[N], ...input] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number))
// N : 회의 수 input : 회의 시간 적혀있는 배열

const solution = () => { 
    let answer = 0;
    
    input.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else { 
            return a[1] - b[1];
        }
    });

    let et = 0;
    for (let [startTime, endTime] of input) { 
        if (startTime >= et) { 
            answer++;
            et = endTime;
        }
    }

    // console.log(answer);
    return answer;
}

console.log(solution());