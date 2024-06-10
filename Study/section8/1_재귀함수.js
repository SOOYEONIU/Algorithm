const solution = (tempNum) => { 
    
    const DFS = (L) => { 
        if (L === 0) return;
        else { 
            DFS(L - 1);
            console.log(L);
        }
    }
    DFS(tempNum);
}
let input = 3;

solution(input);