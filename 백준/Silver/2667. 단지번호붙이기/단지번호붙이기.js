const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = +input.shift();
let graph = input.map(value => value.split('').map(Number));
let visited = Array.from(Array(N), () => new Array(N).fill(false));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

let count_complex = 0;
let count_home = 0;
let answer = [];

const dfs = (x, y) => {     
    if (graph[x][y] === 1 && visited[x][y] === false) {
        visited[x][y] = true;
        count_home++;
        for (let i = 0; i < 4; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];

            if (0 <= newX && N > newX && 0 <= newY && N > newY && graph[newX][newY] === 1 && visited[newX][newY] === false) {
                dfs(newX, newY);
            }
        
        }
    }
}

for (let i = 0; i < N; i++) { 
    for (let j = 0; j < N; j++) { 
        if (graph[i][j] == 1 && visited[i][j] == false) { 
            dfs(i, j);
            count_complex++;
            answer.push(count_home);
            count_home = 0;
        }
    }
}

console.log(
    count_complex + '\n' + `${answer.sort((a,b) => a-b).join("\n")}`
);