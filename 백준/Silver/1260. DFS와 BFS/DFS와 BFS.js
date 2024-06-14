const fs = require('fs');
let [[N, M, V], ...input] = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) { 
    let [start, end] = input[i];
    graph[start].push(end);
    graph[end].push(start);
}
graph = graph.map(value => value.sort((a, b) => a - b));

let dfsResult = [];
let visited = Array.from({ length: N + 1 }, () => false);
const DFS = (start) => { 
    if (visited[start]) return;
    visited[start] = true;
    dfsResult.push(start);

    for (let i = 0; i < graph[start].length; i++) { 
        let next = graph[start][i];
        if (!visited[next]) { 
            DFS(next);
        }
    }
}
DFS(V)
console.log(dfsResult.join(' '));
const BFS = (start) => { 
    let result = [];
    let queue = [];
    let visited = Array.from({ length: N + 1 }, () => false);
    queue.push(start);
    visited[start] = true;

    while (queue.length) { 
        const v = queue.shift();
        for (const node of graph[v]) { 
            if (!visited[node]) { 
                queue.push(node);
                visited[node] = true;
            }
        }
        result.push(v);
    }
    return result;
}
console.log(BFS(V).join(' '));