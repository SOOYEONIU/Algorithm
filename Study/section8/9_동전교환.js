const solution = (arr, M) => { 
    let answer = Number.MAX_SAFE_INTEGER;
    let n = arr.length;
    const DFS = (level, sum) => { 
        if (sum > M || level >= answer) return;
        if (sum === M) {
            answer = Math.min(level, answer);
        } else { 
            for (let i = 0; i < n; i++) { 
                DFS(level + 1, sum + arr[i]);
            }
        }
    }
    DFS(0, 0);

    return answer;
}
console.log(solution([1,2,5], 15));