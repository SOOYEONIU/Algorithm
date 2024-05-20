const solution = (tempString) => { 
    let answer = '';
    for (let chString of tempString) { 
        answer += chString.toUpperCase();
    }
    return answer;
}
let input = 'ItisTimeToStudy';

console.log(solution(input));