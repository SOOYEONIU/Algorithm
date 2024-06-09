const solution = (input) => { 
    let answer = 0;
    let inputArr = input.trim().split('');
    let stack = [];

    for (let i = 0; i < inputArr.length; i++) { 
        if (inputArr[i] === '(') {
            stack.push('(');
        }
        else if (inputArr[i] === ')') { 
            stack.pop();
            if (inputArr[i - 1] === '(') {
                answer += stack.length;
            } else { 
                answer += 1;
            }
        }
    }
    return answer;
}
let input = '(((()(()()))(())()))(()())';
console.log(solution(input));