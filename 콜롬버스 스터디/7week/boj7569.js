const fs = require('fs');
`
보관 후 하루가 지나면, 익은 토마토들의 인접한 곳에 있는 익지 않은 토마토들은 익은 토마토의 영향을 받아 익게 된디.
하나의 토마토에 인접한 곳은 위, 아래, 왼쪽, 오른쪽, 앞, 뒤 여섯 방향에 있는 토마토를 의미

토마토가 모두 익을 때까지 최소 며칠이 걸리는지를 계산해서 출력
저장될 때부터 모든 토마토가 익어있는 상태이면 0
토마토가 모두 익지는 못하는 상황이면 -1
`
let input = fs.readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
// M : 상자의 가로 칸 수, N : 상자의 세로 칸 수, H : 상자의 높이
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
    let dx = [-1, 1, 0, 0, 0, 0]; //x좌표 M
    let dy = [0, 0, -1, 1, 0, 0]; //y좌표 N
    let dz = [0, 0, 0, 0, -1, 1]; //z좌표 H

    //인접 노드를 우선적으로 탐색하기 때문에 BFS (너비 우선 탐색) 알고리즘 선택 => queue 자료 구조 사용
    const BFS = (queue) => {
        let answer = 0; // 걸린 기간(일수) 담을 변수
        while (queue.length) {
            let [z, x, y, days] = queue.shift();

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