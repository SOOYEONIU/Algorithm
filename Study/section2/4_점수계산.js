let input = `10
1 0 1 1 1 0 0 1 1 0`;

let inputArr = input.split('\n');
let [N, scoreArr] = [Number(inputArr[0]), inputArr[1].split(' ').map(Number)];

const solution = (tempNum, tempArr) => {
    let answer = [];
    let resultSum = 0;

    for (let i = 0; i < tempNum; i++) {
        if (tempArr[i] === 0) {
            answer.push(0);
        } else {
            if (i === 0) {
                answer.push(1);
            } else {
                answer.push(answer[answer.length - 1] + 1);
            }
        }
    }

    for (let score of answer) { 
        resultSum += score;
    }

    return resultSum;
}

console.log(solution(N, scoreArr));