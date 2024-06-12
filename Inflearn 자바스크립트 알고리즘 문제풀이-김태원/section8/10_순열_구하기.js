const solution = (m, arr) => { 
    let answer = [];
    let n = arr.length;
    let chk = Array.from({ length: n }, () => 0);
    let temp = Array.from({ length: m }, () => 0);
    const DFS = (level) => { 
        if (level === m) {
            answer.push(temp.slice());
        } else { 
            for (let i = 0; i < n; i++) { 
                if (chk[i] === 0) { 
                    chk[i] = 1;
                    temp[level] = arr[i];
                    DFS(level + 1);
                    chk[i] = 0;
                }
            }
        }
    }
    DFS(0);
    answer.push([n * m]);
    return answer.map(ele => ele.join(' ')).join('\n');
}
let m = 2;
let arr = [3, 6, 9];
console.log(solution(m, arr));