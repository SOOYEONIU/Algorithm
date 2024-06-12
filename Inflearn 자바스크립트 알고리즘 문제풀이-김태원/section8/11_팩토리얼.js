const solution = (n) => {
    let answer = 1;
    const factorial = (tempNum) => { 
        if (tempNum <= 0) return;
        answer *= tempNum;
        factorial(tempNum - 1);
    }
    factorial(n);
    return answer;
}
solution(5);