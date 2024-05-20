const solution = (inputString) => { 
    let answer = '';

    for (let i = 0; i < inputString.length; i++) { 
        if (inputString[i] !== 'A') {
            answer += inputString[i];
        } else { 
            answer += '#';
        }
    }
    return answer;
}
let inputString = 'BANANA';

console.log(solution(inputString));