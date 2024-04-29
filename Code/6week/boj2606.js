const fs = require('fs');

let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");

const [computerNum, connectLink] = [Number(input.shift()), Number(input.shift())];

let graph = [...new Array(computerNum + 1)].map(() => []);
let visited = [...new Array(computerNum + 1)].fill(0);
console.log(graph, visited)

for (let i = 0; i < connectLink; i++) { 
    let start = Number(input[i].split(" ")[0]);
    let end = Number(input[i].split(" ")[1]);
    console.log(start, end)
    graph[start].push(end);
    graph[end].push(start);
}
console.log(graph, visited)

visited[1] = 1;

let ans = 0;

const dfs = (start) => {
    for (let end of graph[start]) { 
        if (!visited[end]) { 
            visited[end] = 1;
            ans++;
            dfs(end);
        }
    }
}
dfs(1);
console.log(graph, visited)
console.log(ans);