const solution = (tempNum) => { 
    let answer = '';
    const DFS = (num) => {
        if (num === 1) {
            answer += '1'; 
            return;
        }
        DFS(Math.floor(num / 2));
        answer += (num % 2);
    }
    DFS(tempNum);
    return answer;
}

console.log(solution(11));