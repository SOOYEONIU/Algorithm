let input = `5
2 3 3 1 3
1 1 2 2 3`;

let inputArr = input.split('\n');
let N = Number(inputArr.shift());
let [situationA, situationB] = [
    inputArr[0].split(' ').map(Number),
    inputArr[1].split(' ').map(Number)
];

const solution = (tempN, tempA, tempB) => {
    let answer = [];

    for (let i = 0; i < tempN; i++) { 
        if (tempA[i] === tempB[i]) {
            answer.push('D');
        } else { 
            if (tempA[i] === 1 && tempB[i] === 3
                || tempA[i] === 2 && tempB[i] === 1
                || tempA[i] === 3 && tempB[i] === 2
            ) {
                answer.push('A')
            } else { 
                answer.push('B');
            }
        }
    }
    return answer;
}

let result = solution(N, situationA, situationB);
console.log(result.join('\n'));