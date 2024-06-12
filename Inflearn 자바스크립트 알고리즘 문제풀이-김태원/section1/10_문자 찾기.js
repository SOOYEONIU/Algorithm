const solution = (tempString, matchS) => { 
    let answer = 0;

    for (let i = 0; i < tempString.length; i++) { 
        if (tempString[i] === matchS) answer++;
    }
    
    return answer; 
}

let input = `COMPUTERPROGRAMMING
R`;
let [inputString, matchAlp] = input.split('\n'); 

console.log(solution(inputString, matchAlp));