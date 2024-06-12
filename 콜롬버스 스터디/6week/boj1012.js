const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(el => el.split(" ").map(Number)); // 입력받음

let testCase = input.shift(); 
let graph = [];
let visited = [];

//상하좌우
const col = [-1, 1, 0, 0]; // 상하
const row = [0, 0, -1, 1]; // 좌우

const dfs = (j, k, N, M) => { //dfs 탐색 함수
    visited[j][k] = true; //해당 위치를 방문했으니 true로 변경
    for (let i = 0; i < 4; i++) { //상하좌우
        let newJ = j + col[i]; //상하
        let newK = k + row[i]; //좌우
        if (newJ >= 0 && newJ < N && newK >= 0 && newK < M) { // newJ가 0보다 크고 N보다 작거나 newK는 0보다 크고 M보다 작을 때
            if (graph[newJ][newK] === 1 && visited[newJ][newK] === false) { // 배추가 심어져 있고, 방문한 기록이 없으면 다시 재귀함수 실행
                dfs(newJ, newK, N, M);
            }
        }
    }
}

for (let i = 0; i < testCase; i++) { // testcase만큼 반복
    //최소 배추흰지렁이 마리 수
    let worm = 0;

    let [M, N, K] = input.shift(); // M: 배추를 심은 배추밭의 가로길이, N: 세로길이, K: 배추가 심어져 있는 위치의 개수
    graph = Array.from(Array(N), () => new Array(M).fill(0)); // 배추 있는 곳 1, 배추 없는 곳 0
    visited = Array.from(Array(N), () => new Array(M).fill(false)); // 방문했던 곳은 true, 방문하지 않은 곳 false

    while (K > 0) { //K(배추가 심어져 있는 위치의 갯수)가 0이 되기 전까지 반복하며 graph 배열 만들기
        K--; 
        const [x, y] = input.shift();
        graph[y][x] = 1; // 그래프에 배추 심어져 있으면 1표시
    }

    //graph, visited의 배열 자료를 탐색
    for (let j = 0; j < N; j++) { // j : N행 길이 만큼 반복
        for (let k = 0; k < M; k++) { // k : M열 길이 만큼 만복
            if (graph[j][k] === 1 && visited[j][k] === false) {// 배추가 심어져있고, 방문했던 기록이 없으면 dfs함수 실행
                dfs(j, k, N, M); // 주변 인접한 곳 찾는 함수
                worm++; // 몇번 dfs를 실행 -> 배추흰지렁이가 필요한 마리 수
            }
        }
    }
    console.log(worm); // testcase만큼 필요한 배추흰지렁이 수를 출력
}