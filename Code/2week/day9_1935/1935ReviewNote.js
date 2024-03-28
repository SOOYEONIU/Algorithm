const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let iterator = Number(input.shift()); //숫자 개수
let strSentence = input.shift().split(''); // 두번째 줄 string 문장 하나씩 쪼개기
//['A', 'B', 'C', '*', '+', 'D', 'E', '/', '-']

input = input.map((item) => Number(item)); // input 안에 요소들 Number 타입으로 변경

const map = new Map; // Map 활용

for (let i = 0; i < iterator; i++) { 
    map.set(String.fromCharCode(i + 65), input[i]); // Map 요소 추가 
    //{ 'A' => 1, 'B' => 2, 'C' => 3, 'D' => 4, 'E' => 5 }
}

// 조건문 처리를 위해서 연산자만 따로 모아놓음
const operators = ["+", "-", "*", "/"];

//연산자에 맞는 함수 만들기
const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
};

let stack = [];

//strSentence에 영어 알파벳과 연산자로 되어 있어 알파벳에 해당하는 값을 가진 배열로 바꿈
const numWithStr = strSentence.map((item) => operators.includes(item) ? item : map.get(item)); 
//[ 1, 2, 3, '*', '+', 4, 5, '/', '-']

for (let i = 0; i < strSentence.length; i++) { 
    let singleStr = numWithStr[i];

    if (operators.includes(singleStr)) { 
        let backNum = stack.pop();
        let frontNum = stack.pop(); 

        //연산자에 맞는 함수
        let calcFunc = calculator[singleStr];

        singleStr = calcFunc(frontNum, backNum);
    }

    // 연산자 아니면 stack에 넣음
    stack.push(singleStr);
}

//소수점 아래 2자리까지 표현
console.log(stack[0].toFixed(2));
