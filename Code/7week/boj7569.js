const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

let [M, N, H] = input.shift();

const chunk = (data, size) => { // 토마토 상자를 3차원 배열로 변환
    const arr = [];
    for (let i = 0; i < data.length; i += size) {
        arr.push(data.slice(i, i + size));
    }
    return arr;
}
// 토마토 상자 3차원 배열 
let box = chunk(input, N);
//방문 여부 3차원 배열
let visited = Array.from(Array(H), () => Array.from(Array(N), ()=> new Array(M).fill(false)));

let queue = []; // 익은 토마토의 위치
let unripe = 0; // 안익은 토마토의 개수
for (let i = 0; i < H; i++) { 
    for (let j = 0; j < N; j++) { 
        for (let k = 0; k < M; k++) { 
            if (box[i][j][k] === 1) { //box에 있는 익은 토마토(1)일 경우 tomato 배열에 좌표 넣기
                queue.push([i, j, k, 0]);
            }
            if (box[i][j][k] === 0) { //익지 않은 토마토(0)일 경우 unripe 증가 
                unripe++;
            }
        }
    }
}

if (!unripe) { // 안익은 토마토가 없으면 0을 반환
    console.log(0);
} else {
    let dx = [-1, 1, 0, 0, 0, 0]; //x좌표
    let dy = [0, 0, -1, 1, 0, 0]; //y좌표
    let dz = [0, 0, 0, 0, -1, 1]; //z좌표

    //BFS
    const BFS = (queue) => {
        let answer = 0; // 걸린 기간(일수) 담을 변수
        let i = 0; // 큐 인덱스
        while (queue.length > i) {
            let [z, x, y, days] = queue[i++];

            //현재 위치 기준 인접한 여섯 곳 탐색 반복문
            for (let i = 0; i < 6; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                const nz = z + dz[i];

                //해당 위치가 상자(그래프) 범위 밖으로 벗어나지 않았고, 안익은 토마토라면
                if (nx >= 0 && nx < N && ny >= 0 && ny < M && nz >= 0 && nz < H && box[nz][nx][ny] === 0) {
                    box[nz][nx][ny] = 1; // 토마토 익힘
                    queue.push([nz, nx, ny, days + 1]); // 큐에 해당 위치와 하루 증가한 값 담기
                    unripe--; // 안 익은 토마토 개수 감소
                }
            }
            answer = days;
        }
        return (unripe ? -1 : answer); // 안 익은 토마토가 있으면 -1 반환, 없으면 걸린 기간(일수) 반환
    }
    console.log(BFS(queue));
}