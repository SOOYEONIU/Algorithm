const solution = (tempStr) => { 
    let answer;

    answer = Number(tempStr.toLowerCase().replace(/[a-z]/g, ''));

    return answer;
}

let input = 'g0en2T0s8eSoft';
console.log(solution(input));