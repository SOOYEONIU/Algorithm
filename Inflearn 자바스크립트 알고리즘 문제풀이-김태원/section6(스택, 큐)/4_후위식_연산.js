const solution = (input) => { 
    let answer = 0;
    let tempStr = input.split('');
    let stack = [];
    for (let str of tempStr) {
        if (!isNaN(str)) {
            stack.push(str);
        } else {
            let rightNum = Number(stack.pop());
            let leftNum = Number(stack.pop());
            
            if (str === '+') stack.push(leftNum + rightNum);
            else if (str === '-') stack.push(leftNum - rightNum);
            else if (str === '*') stack.push(leftNum * rightNum);
            else if (str === '/') stack.push(leftNum / rightNum);
        }
    }
    answer = stack[0];
    return answer;
}
let input = `352+*9-`;
console.log(solution(input));