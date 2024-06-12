const solution = (tempNum) => { 
    let answer = '';
    const DFS = (n) => { 
        if (tempNum >= n) {
            answer += n + ' ';
            DFS(n + 1);
        } else { 
            return;
        }
    }
    DFS(1);

    return answer;
}
console.log(solution(3));