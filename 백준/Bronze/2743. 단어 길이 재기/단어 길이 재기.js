const fs = require('fs');
let input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()

const solution = (tempStr) => { 
    let answer = 0;
    for (let str of tempStr) { 
        let checkStr = str.toLowerCase();
        if (checkStr.charCodeAt() >= 97 && checkStr.charCodeAt() <= 122) { 
            answer++;
        }
    }
    return answer;
}
console.log(solution(input));