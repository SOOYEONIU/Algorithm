const solution = (tempString) => { 
    let answer = '';

    for (let chStr of tempString) { 
        if (chStr === chStr.toUpperCase()) {
            answer += chStr.toLowerCase();
        } else { 
            answer += chStr.toUpperCase();
        }
    }
    return answer;
}

let input = 'StuDY';
console.log(solution(input));