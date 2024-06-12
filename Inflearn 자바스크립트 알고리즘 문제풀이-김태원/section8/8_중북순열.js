const solution = (N, M) => { 
    let answer = [];
    let tmpArr = Array.from({ length: M }, () => 0);    
    const DFS = (level) => { 
        if (level === M) {
            answer.push(tmpArr.slice());
        } else { 
            for (let i = 1; i <= N; i++) {
                tmpArr[level] = i; 
                DFS(level + 1);
            }
        }
    }
    DFS(0);
    console.log(answer.map(ele => ele.join(' ')).join('\n'));
}
solution(3,2);