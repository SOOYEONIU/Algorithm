# 오답노트 양식


## 1. 문제설명


→ 후위 표기식과 각 피연산자에 대응하는 값들이 주어졌을 때, 그 식을 계산하는 프로그램을 작성하기
→ 첫째 줄에 피연산자의 개수(1 <= N <= 26)가 주어지고 둘째 줄에 후위 표기식이 주어진다. (피연산자는 A~Z 영대문자이며, A부터 순서대로 N개의 영대문자만이 사용되며, 길이는 100을 넘기지 않음)
그리고 셋째 줄 부터 N+2번째 줄까지는 각 피연산자에 대응하는 값이 주어진다. (ex. 3번째 줄에는 A에 해당하는 값, 5번째 줄에는 B에 해당하는 값 등등)

(단, 계산 결과를 소숫점 둘째 자리까지 출력하기)

<img width="600" alt="image" src="https://github.com/SOOYEONIU/CodingTest/assets/149544640/296eab41-8f2e-460c-896c-7414f6f99819">


## 2. 접근 방식


→ 후위표현식 즉, 후기표기법은 피연산자를 먼저 표시하고 연산자를 나중에 표기하는 방법이기에 *stack*을 사용하는 예이다.
따라서 stack 알고리즘을 활용하여 후위표기식에 있는 문자들을 하나씩 stack에 넣고 뒤에서부터 연산자일 경우 숫자 두개를 빼 연산을 한 후, 다시 stack에 넣어주는 방식으로 접근하였다.

## 3. 틀린 이유 설명


→ stack으로 접근해서 풀어야하는건 알았으나 알파벳들을 숫자 값을 대입하여 풀어야 했는데 알파벳이 포함된 후기표현식에 문자를 하나씩 stack에 넣은 다음 뒤에서 부터 알파벳을 꺼내 피연산자에 대응하는 값을 대입하려 하니 알고리즘이 풀리지 않았다.

## 4. 올바른 접근 방식 및 해결 방식


   먼저 stack에 넣는 것이 아니라 stack에 넣기 전 알파벳을 대응하는 숫자값으로 치환한 이후 stack에 넣는 방식으로 생각하였다.

   따라서 object나 Map을 활용하여 `{ A: 1, B: 2, C: 3, ... }`이 구조를 만들고 key-value 형태의 자료형을 하여 치환하는 과정을 넣었다.
   ```javascript
   const map = new Map;

   for (let i = 0; i < iterator; i++) {
       map.set(String.fromCharCode(i + 65), input[i]); // Map 요소 추가
       //{ 'A' => 1, 'B' => 2, 'C' => 3, 'D' => 4, 'E' => 5 }
   }
   const operators = ["+", "-", "*", "/"];

   ...

   const numWithStr = strSentence.map((item) => operators.includes(item) ? item : map.get(item)); 
   ```

   이후 stack 구조를 활용하여 연산 과정을 수행하니 문제를 정상적으로 풀 수 있었다.

## 5. 최종 코드


```javascript
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
```
