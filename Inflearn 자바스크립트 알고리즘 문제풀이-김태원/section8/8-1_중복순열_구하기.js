const solution = (N, M) => { 
    let answer = [];
    let chk = Array.from({ length: M }, () => 0);
    const DFS = (level) => { 
        if (level === M) {
            console.log(chk)
            answer.push(chk.slice());
        } else { 
            for (let i = 1; i <= N; i++) {
                chk[level] = i;
                DFS(level + 1);
            }
        }
    }
    DFS(0);
    console.log(answer.map(ele => ele.join(' ')).join('\n'))
}
solution(3, 2);