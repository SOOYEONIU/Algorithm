const solution = (tempString) => { 
    let answer = 0;

    for (let i = 0; i < tempString.length; i++) { 
        if (tempString[i] == tempString[i].toUpperCase()) { 
            answer += 1;
        }
    }

    return answer;
}
let input = 'KoreATimeGood';

console.log(solution(input));