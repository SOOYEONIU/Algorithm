const solution = (m, arr) => { 
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    const DFS = (level, scoreSum, time) => { 
        if (m < time) return;
        if (n === level) {
            answer = Math.max(answer, scoreSum);
        } else { 
            DFS(level + 1, scoreSum + arr[level][0], time + arr[level][1]);
            DFS(level + 1, scoreSum, time);
        }
    }
    DFS(0, 0, 0);

    console.log(answer);
}
let M = 20;
let arr = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4]
];
solution(M, arr);