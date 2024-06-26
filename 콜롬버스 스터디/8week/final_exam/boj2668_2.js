const fs = require('fs');
let [n, ...input] = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(Number);

`
접근 방법 - DFS
1. 사이클이 발생하는지 확인하기 위해 깊이 우선 탐색(DFS) 알고리즘을 이용
2. 사이클이 발생했다면, 그때 방문했던 모든 노드들은 정답이 되기 때문에 "check"배열에 따로 저장
3. return false; 를 해준 이유 : n개의 노드를 탐색하면 되는데, 이전에 싸이클이 발생했던 구간(check[n] === true)의 경우 이미 자신을 제외한 다른 싸이클에 속해있다는 의미로 다시 방문할 필요가 없다.
`
let tempArr = [0]; 
let check = []; // 사이클에 속한 노드들 체크하는 배열
let visit = []; // n개의 노드를 탐색할 때 별로 방문한 곳 체크

const dfs = (node, target) => { 
    if (check[node]) return false;
    if (!visit[node]) { 
        visit[node] = true;
        return dfs(tempArr[node], target);
    }
    if (node === target) { 
        return true;
    }
    return false;
}

check = new Array(n + 1).fill(false);
tempArr.push(...input);

if (tempArr.length === n + 1) { 
    let result = [];
    for (let i = 1; i <= n; i++) { 
        visit = new Array(n+1).fill(false);
        const isCycle = dfs(i, i);
        if (isCycle) { 
            for (let j = 1; j <= n; j++) { 
                if (visit[j]) { 
                    check[j] = true;
                }
            }
        }
    }
    for (let i = 1; i < check.length; i++) { 
        if (check[i]) result.push(i);
    }
    result.unshift(result.length);
    console.log(result.join('\n'));
}