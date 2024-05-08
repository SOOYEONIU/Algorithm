const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));

let [m, n, k] = input.shift();

const chunk = (data, size) => { // 토마토 상자를 3차원 배열로 변환
    console.log(data.length)
    if (data.length === size) {
        return data;
    } else {
        const arr = [];
    
        for (let i = 0; i < data.length; i += size) {
            arr.push(data.slice(i, i + size));
        }
        return arr;
    }
}

let box = chunk(input, n); // 토마토 상자
let visited = Array.from(Array(k), () => Array.from(Array(n), ()=> new Array(m).fill(false)));
console.log(box ,visited)

let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];
let dz = [-1, 1];
let result = -1;

const checkedTomato = (x, y, z) => {
    visited[z][x][y] = true;
    // 위칸, 아래칸
    for (let i = 0; i < 2; i++) { 
        let nz = z + dz[i];

        if (nz >= 0 && nz < k && box[z][x][y] === 1 && box[nz][x][y] === 0) { 
            box[nz][x][y] = 1;
            visited[nz][x][y] = true;
            checkedTomato(x, y, nz);
        }
    }

    // 왼,오,앞,뒤
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && box[z][x][y] === 1 && box[z][nx][ny] === 0) {
            box[z][nx][ny] = 1;
            checkedTomato(nx, ny, z);
        }
    }
}

console.log(box)


const solution = () => {
    // 저장될 때부터 모든 토마토가 익어있는 상태인지 출력하는 반복문 
    // 조건은 0이 있느냐 없느냐 있으면 아래의 3중 for문을 돌림, 없으면 result값 0으로 반환
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < n; j++) {
            for (let l = 0; l < m; l++) {
                if (box[i][j][l] === 0) {
                    break;
                } else {
                    return result = 0;
                }
            }
        }
    }

    if (result === -1) {
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < n; j++) {
                for (let l = 0; l < m; l++) {
                    if (box[i][j][l] === 1) {    
                        checkedTomato(j, l, i);
                    }
                }
            }
        }
    }
}
solution();