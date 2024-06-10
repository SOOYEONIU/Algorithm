const solution = (stairNum) => { 
    let tempArr = Array.from({ length: stairNum }, () => 0);
    tempArr[0] = 1;
    tempArr[1] = 2;
    for (let i = 2; i < stairNum; i++) { 
        tempArr[i] = tempArr[i - 2] + tempArr[i - 1];
    }
    let answer = tempArr[stairNum - 1];
    return answer;
}

console.log(solution(7));