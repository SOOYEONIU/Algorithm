const fs = require('fs');
const { sourceMapsEnabled } = require('process');
let [[N, M], ...input] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number))
// N 정점의 개수, M 간선의 개수

const graph = Array.from({length:(N + 1)}, () => []);
const visited = Array.from({ length: (N + 1) }, () => false);

for (let i = 0; i < M; i++) { 
    const [start, end] = input[i];

    graph[start].push(end);
    graph[end].push(start);
}

const solution = () => {
    let count = 0;
    const dfs = (start) => {
        if (!visited.includes(false)) return;

        for (let i of graph[start]) {
            if (visited[i] === false) {
                visited[i] = true;
                dfs(i);
            }
        }
    }

    for (let i = 1; i < N + 1; i++) {
        if (visited[i] === false) {
            count++;
            dfs(i);
        }
    }
    return count;
}

console.log(solution());