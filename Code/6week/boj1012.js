const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(el => el.split(" ").map(Number));

let testCase = input.shift();

let graph = [];
let visited = [];

//상하좌우
const row = [0, 0, -1, 1];
const col = [-1, 1, 0, 0];

const dfs = (j, k, N, M) => { 
    visited[j][k] = true;
    for (let i = 0; i < 4; i++) { 
        let newJ = j + col[i];
        let newK = k + row[i];
        if (newJ >= 0 && newJ < N && newK >= 0 && newK < M) { 
            if (graph[newJ][newK] === 1 && visited[newJ][newK] === false) { 
                dfs(newJ, newK, N, M);
            }
        }
    }
}

for (let i = 0; i < testCase; i++) {
    //최소 배추흰지렁이 마리 수
    let worm = 0;

    let [M, N, K] = input.shift();        
    graph = Array.from(Array(N), () => new Array(M).fill(0)); 
    visited = Array.from(Array(N), () => new Array(M).fill(false));

    while (K > 0) { 
        K--;
        const [x, y] = input.shift();
        console.log(x,y)
        graph[y][x] = 1;
    }

    for (let j = 0; j < N; j++) { 
        for (let k = 0; k < M; k++) { 
            if (graph[j][k] === 1 & visited[j][k] === false) { 
                dfs(j, k, N, M);
                worm++;
            }
        }
    }
    console.log(worm);
}