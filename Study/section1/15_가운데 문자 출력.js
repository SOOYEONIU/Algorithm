const solution = (tempStr) => {
    let midNum = parseInt(tempStr.length / 2);
    let answer = '';
    if (tempStr.length % 2 == 1) {
        answer = tempStr[midNum];
    } else { 
        answer = tempStr[midNum-1] + tempStr[midNum];
    }
    return answer;
}
let input = 'good';

console.log(solution(input));