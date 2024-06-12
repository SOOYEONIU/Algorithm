function solution(a, b, c) {
    let answer = '';
    
    if (a + b > c && a + c > b && b + c > a) {
        answer = 'YES';
    } else { answer = 'NO'; }

    return answer;
}

console.log(solution(6, 7, 11));