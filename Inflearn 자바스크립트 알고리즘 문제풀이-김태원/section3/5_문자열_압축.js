const solution = (tempStr) => {
    let answer = '';
    let countNum = 1;
    let currentStr = '';
    for (let i = 0; i < tempStr.length; i++) { 
        if (i == 0) { // 첫번째 문자의 경우 currentStr 변수에 바로 입력과 answer에 단어 추가
            currentStr = tempStr[i]; 
            answer += currentStr;
            continue;
        } else if (currentStr == tempStr[i]) { // currentStr값과 현재 tempStr[i]의 값이 같다면 countNum에 1 추가
            countNum += 1;
        } else if (countNum > 1 && currentStr != tempStr[i]) { // countNum이 1일 때는 생략, countNum이 1 이상일 경우 표기
            answer += countNum; // 답에 countNum 추가
            countNum = 1; // countNum 리셋
            currentStr = tempStr[i]; // 현재 currentStr 변경
            answer += currentStr; // answer에 입력
        } else { // countNum이 1이고, currentStr과 tempStr[i]가 같지 않을때
            currentStr = tempStr[i]; // 현재 currentStr 변경
            answer += currentStr; // answer에 입력
        }
    }

    return answer;
}
let input = 'KKHSSSSSSSE';
console.log(solution(input));