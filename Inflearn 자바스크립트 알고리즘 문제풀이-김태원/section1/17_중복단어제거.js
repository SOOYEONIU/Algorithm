const solution = (tempArr, tempNum) => {
    let answer = [];

    for (let i = 0; i < tempNum; i++) { 
        if (!answer.includes(tempArr[i])) { 
            answer.push(tempArr[i]);
        }
    }

    return answer;
}

let input = `5
good
time
good
time
student`;

const inputArr = input.split("\n");
let strNum = Number(inputArr.shift());

console.log(solution(inputArr, strNum).join('\n'));