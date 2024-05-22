const solution = (tempStr) => { 
    let answer='';

    for (let i = 0; i < tempStr.length; i++) { 
        if (!answer.includes(tempStr[i])) { 
            answer += tempStr[i];
        }
    }
    return answer;
}

let input = 'ksekkset';

console.log(solution(input));