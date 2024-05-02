const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let [N, M] = input.shift().split(' ');

let graph = input.map(value => value.split('').map(Number));

const solution = (arr) => { 
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    let min = Number.MAX_SAFE_INTEGER;
    arr[0][0] = 0;
    
    const DFS = (x, y, cnt) => {
        if (cnt >= min) return;
        if (x === (N - 1) && y === (M - 1)) {
            min = Math.min(min, cnt);
        } else {
            for (let i = 0; i < 4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                
                if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny]) { 
                    arr[nx][ny] = 0;
                    DFS(nx, ny, cnt+1);
                    arr[nx][ny] = 1;
                }
            }
        }
    }
    DFS(0, 0, 1);
    
    return min;
}

console.log(solution(graph));
