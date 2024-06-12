const fs = require('fs');
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");

//컴퓨터수, 연결 수
const [computerNum, connectLink] = [Number(input.shift()), Number(input.shift())];

let graph = [...new Array(computerNum + 1)].map(() => []);
let visited = [...new Array(computerNum + 1)].fill(0); // 0: 방문 안했음, 1: 방문 했음

for (let i = 0; i < connectLink; i++) { // 양방향 그래프 만들기
    let start = Number(input[i].split(" ")[0]);
    let end = Number(input[i].split(" ")[1]);
    graph[start].push(end);
    graph[end].push(start); 
}
console.log(graph);
`
[
  [],          [ 2, 5 ],
  [ 1, 3, 5 ], [ 2 ],
  [ 7 ],       [ 1, 2, 6 ],
  [ 5 ],       [ 4 ]
]
`

visited[1] = 1; //1부터 시작이니 visited[1]을 방문했다고 표시
let answer = 0; //인접한 컴퓨터 수 -> 바이러스 걸린 수

const dfs = (start) => {
    for (let end of graph[start]) {
        if (!visited[end]) { // 방문기록이 없을 시
            visited[end] = 1; // 방문함 표시 1
            answer++; // 인접 컴퓨터 수 +1
            dfs(end); // 재귀함수 돌리기
        }
    }
}
dfs(1); 
console.log(answer);