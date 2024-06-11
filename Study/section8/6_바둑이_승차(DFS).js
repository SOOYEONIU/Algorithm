const solution = (c, arr) => {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    const DFS = (level, sum) => {
        if (sum > c) return;

        if (level === n) {
            answer = Math.max(answer, sum);
        } else { 
            DFS(level + 1, sum + arr[level]);
            DFS(level + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
let c = 259;
let arr = [81, 58, 42, 33, 61];
console.log(solution(c, arr));