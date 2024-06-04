const solution = (stringDummy) => { 
    let answer = true;

    stringDummy = stringDummy.toLowerCase().replace(/[^a-z]/g, '');
    if (stringDummy.split('').reverse().join('') !== stringDummy) { 
        answer = false;
    }

    return answer === true ? 'YES' : 'NO';
}

let input = `found7, time: study; Yduts; emit, 7Dnuof`;

console.log(solution(input));