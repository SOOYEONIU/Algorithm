const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let N = +input.shift();
let graph = input.map(value => value.split('').map(Number));
let visited = Array.from(Array(N), () => new Array(N).fill(false));

let dx = [-1, 0, 1, 0]; //좌우
let dy = [0, 1, 0, -1]; //상하

let count_complex = 0; // 단지수
let count_home = 0; // 단지 내 아파트 수
let answer = []; // count_home 저장

const dfs = (x, y) => {
    if (graph[x][y] === 1 && visited[x][y] === false) {
        visited[x][y] = true;
        count_home++;

        for (let i = 0; i < 4; i++) {
            let newX = x + dx[i];
            let newY = y + dy[i];

            if (0 <= newX && N > newX // newX가 0보다 크거나 같고 N보다 작은 조건
                &&
                0 <= newY && N > newY // newY가 0보다 크거나 같고 N보다 작은 조건
                &&
                graph[newX][newY] === 1 && visited[newX][newY] === false
            ) {
                dfs(newX, newY);
            };
        };
    };
};

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] == 1 && visited[i][j] == false) {
            dfs(i, j);
            count_complex++;
            answer.push(count_home);
            count_home = 0;
        };
    };
};

console.log(
    count_complex + '\n' + `${answer.sort((a, b) => a - b).join("\n")}` // 단지내 집 수는 오름차순 정렬하
);

    
