const solution = (c, weightArr) => { 
    let n = weightArr.length;
    let maxNum = Number.MIN_SAFE_INTEGER;
    const DFS = (level, sum) => { 
        if (c < sum) return;
        if (n === level) {
            maxNum = Math.max(maxNum, sum);
        } else { 
            DFS(level + 1, sum + weightArr[level]);
            DFS(level + 1, sum);
        }
    }
    DFS(0, 0);
    return maxNum;
}
let c = 259;
let weightArr = [81, 58, 42, 33, 61];
console.log(solution(c, weightArr));