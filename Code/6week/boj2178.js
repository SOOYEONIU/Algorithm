const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let [N, M] = input.shift().split(' ').map(Number); // 행 : N , 열 : M
let graph = input.map(value => value.split('').map(Number)); // N개의 줄에 M개의 정수로 된 미로

const BFS = (n, m, arr) => {
    const dx = [-1, 0, 1, 0]; // 상하
    const dy = [0, 1, 0, -1]; // 좌우

    let queue = []; // 이동 좌표 담아줄 queue
    queue.push({ x: 0, y: 0 }); // 좌표 0,0 부터 시작

    while (queue.length) {
        const target = queue.shift(); // {x: 0, y:0}

        for (let i = 0; i < 4; i++) {
            let nx = target.x + dx[i];
            let ny = target.y + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 1) { // 상하좌우 돌때 좌표를 넘어가지 않게 하는 조건문 그리고 상하좌우 중 1 값이 있으면 if 조건문 안으로 이동
                arr[nx][ny] = arr[target.x][target.y] + 1; // -> 해당 위치에 온 칸수 입력
                queue.push({ x: nx, y: ny }); // 다시 queue에 새로운 nx, ny값을 넣고 반복/ 맨마지막에 도착하면 queue의 길이가 0이 되어 반복문 탈출
            }
        }
    }
    `
        arr
        [
            [ 3, 0, 9, 10, 11, 12 ],
            [ 2, 0, 8, 0, 12, 13 ],
            [ 3, 0, 7, 0, 13, 14 ],
            [ 4, 5, 6, 0, 14, 15 ]
        ]
    `
    return arr[n - 1][m - 1];
}

let answer = BFS(N, M, graph);

//최소 칸수 구하기
console.log(answer);