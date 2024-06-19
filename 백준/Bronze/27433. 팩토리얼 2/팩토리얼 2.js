const fs = require('fs');
let input = Number(fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim());

const solution = (num) => { 
    let answer = 1;
    if (num === 0) {
        answer = 1;
    } else {
        const factorial = (num) => {
            answer *= num;
            if (--num === 0) {
                return answer;
            } else {
                factorial(num);
            }
        }
        factorial(num);
    }
    console.log(answer)
}
solution(input);