const fs = require('fs');
//재귀횟수를 입력 받는다.
let input = Number(fs.readFileSync(__dirname + '/input.txt').toString().trim());

let underbar = ''; // 언더바 변수 
const solution = (n) => { // 재귀횟수 n을 입력받아 solution함수 실행 
    let str = underbar; // str에 underbar를 저장해 놓은 이유는 아래의 마지막 부분에 이전 언더바를 넣어야 하기 때문

    if (n === 0) { //재귀횟수가 0일 때 출력 값
        console.log(`${underbar}"재귀함수가 뭔가요?"`);
        console.log(`${underbar}"재귀함수는 자기 자신을 호출하는 함수라네"`);
        console.log(`${underbar}라고 답변하였지.`);
        return
    }
    
    console.log(`${underbar}"재귀함수가 뭔가요?"`);
    console.log(`${underbar}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${underbar}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${underbar}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`);
    
    // 재귀함수 돌리기 전 underbar 추가
    underbar += '____';
    solution(n - 1); // 재귀함수 실행

    console.log(`${str}라고 답변하였지.`); // ← 마지막 부분
}

console.log(`어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.`);
solution(input);