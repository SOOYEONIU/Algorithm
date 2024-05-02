const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number);

let graph = input.map(value => value.split('').map(Number));

const BFS = (n, m, arr) => {
    const dx = [-1, 0, 1, 0]; // 상하
    const dy = [0, 1, 0, -1]; // 좌우

    let queue = [];
    queue.push({ x: 0, y: 0 });

    while (queue.length) {
        const target = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = target.x + dx[i];
            let ny = target.y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) {
                arr[nx][ny] = arr[target.x][target.y] + 1;
                queue.push({ x: nx, y: ny });
            }
        }
    }
    console.log(arr)
    return arr[n - 1][m - 1];
}

let answer = BFS(N, M, graph);

console.log(answer);