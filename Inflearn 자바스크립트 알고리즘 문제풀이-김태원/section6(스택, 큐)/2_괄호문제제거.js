const solution = (tempStr) => { 
    let strArr = tempStr.split('');
    let stack = [];
    for (let str of strArr) { 
        if (str === ')') {
            while (stack.pop() !== '(');
        }
        else stack.push(str);
    }

    return stack.join('');
}
let input = `(A(BC)D)EF(G(H)(IJ)K)LM(N)`;
console.log(solution(input));