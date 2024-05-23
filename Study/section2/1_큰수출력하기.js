let input = `6
7 3 9 5 6 12`;


let inputArr = input.split('\n');
let N = Number(inputArr[0]);
let numBox = inputArr[1].split(' ').map(Number);

const solution = (tempNum, tempBox) => { 
    let answer = [];

    answer.push(tempBox[0]);
    for (let i = 0; i < tempNum - 1; i++) { 
        if (tempBox[i] < tempBox[i + 1]) { 
            answer.push(tempBox[i + 1]);
        }
    }
    return answer;
}

let result = solution(N, numBox);
console.log(result.join(' '));