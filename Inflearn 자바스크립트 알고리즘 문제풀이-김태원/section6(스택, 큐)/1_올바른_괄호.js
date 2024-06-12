const solution = (tempString) => {
    let strArr = tempString.split('');
    let stack = [];
    for (let str of strArr) { 
        if (str == '(') {
            stack.push(str);
        } else { 
            if (stack.length === 0) { return 'NO' };
            stack.pop();
        }
    }
    
    return stack.length ? 'NO' : 'YES';
}

let input = `(()(()))(()`;
console.log(solution(input));