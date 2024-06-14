const fs = require("fs");
const [[n], [k], ...input] = fs
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt")
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
// k => input.length, n: 동기 수

let graph = Array.from({ length: n + 1}, () => []);
for (let i = 0; i < k; i++) { 
    graph[input[i][0]].push(input[i][1]);
    graph[input[i][1]].push(input[i][0]);
}

const solution = (graph) => {
    let result = 0;
    let chkArr = Array.from({ length: n + 1}, () => false);

    const BFS = (graph, start, cnt) => { 
        let queue = [];
        queue.push([start, cnt]);
        chkArr[start] = true;

        while (queue.length) { 
            const [v, y] = queue.shift();
            for (const node of graph[v]) { 
                if (!chkArr[node] && y < 2) { 
                    queue.push([node, y+1]);
                    chkArr[node] = true;
                    result += 1;
                }
            }
        }
        
    }
    BFS(graph, 1, 0);
    return result;
}

console.log(solution(graph));