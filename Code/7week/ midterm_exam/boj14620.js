const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let n = Number(input.shift());
let base = input.map(value => value.split(' ').map(Number));
console.log(base);
let visited = Array.from(Array(n), () => new Array(n).fill(false));
console.log(visited)
let flowerNum = 3;

let dx = [-1, 0, 1, 0]; //좌우
let dy = [0, 1, 0, -1]; //상하
let result = [];

const flower = (x, y) => { 
    let sum = visited[x][y];
    for (let i = 0; i < 4; i++) { 
        let nx = x + dx[i]; 
        let ny = y + dy[i];

        if (nx < 0 && nx >= n && ny < 0 && nx >= n && visited[nx][ny] === false) {
            console.log(1)
        } else { 
            // sum += base[nx][ny]; 
        }
    }
    console.log(sum);
}

flower(0,0)
