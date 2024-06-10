const solution = (stoneNum) => {
    let answer = 0;
    let stepNum = Array.from({ length: stoneNum + 1 }, () => 0);    
    stepNum[0] = 1;
    stepNum[1] = 2;
    for (let i = 2; i < stoneNum + 1; i++) { 
        stepNum[i] = stepNum[i - 2] + stepNum[i - 1];
    }
    answer = stepNum[stoneNum];
    return answer;
}
let stoneNum = 7;
console.log(solution(stoneNum));