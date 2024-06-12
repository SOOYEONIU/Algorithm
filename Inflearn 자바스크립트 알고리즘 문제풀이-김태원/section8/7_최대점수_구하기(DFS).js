const solution = (N, M, arr) => { 
    // N : 문제 개수(arr.length), M : 제한 시간
    let answer = Number.MIN_SAFE_INTEGER;
    const DFS = (level, scoreSum, timeSum) => { 
        if (level === N) {
            if (M >= timeSum) {
                answer = Math.max(answer, scoreSum);
            }
        } else { 
            DFS(level + 1, scoreSum + arr[level][0], timeSum + arr[level][1]);
            DFS(level + 1, scoreSum, timeSum);
        }
    }
    DFS(0, 0, 0);
    console.log(answer);
}
let [N, M] = [5, 20];
let arr = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4]
]
solution(N, M, arr);