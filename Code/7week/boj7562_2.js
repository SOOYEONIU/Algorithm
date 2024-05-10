const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);
let index = 1;

for (let i = 0; i < testCase; i++) { 
    let L = Number(input[index]);
    let arr = Array.from(Array(L), () => new Array(L).fill(0));
    let [sx, sy] = [
        Number(input[index + 1].split(' ')[0]),
        Number(input[index + 1].split(' ')[1])
    ];
    let [lx, ly] = [
        Number(input[index + 2].split(' ')[0]),
        Number(input[index + 2].split(' ')[1])
    ];

    arr[sx][sy] = 1;

    const bfs = () => { 
        let count = 0;
        let distraciton = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
        let queue = [];
        queue.push([sx, sy]);

        while (queue.length) { 
            let len = queue.length; // 없으면 안됨.

            for (let i = 0; i < len; i++) { 
                let value = queue.shift();
                if (value[0] === lx && value[1] === ly) { 
                    return count;
                }

                for (let j = 0; j < 8; j++) { 
                    let nx = value[0] + distraciton[j][0];
                    let ny = value[1] + distraciton[j][1];

                    if (nx >= 0 && nx < L && ny >= 0 && ny < L && arr[nx][ny] === 0) { 
                        arr[nx][ny] = 1;
                        queue.push([nx, ny]);
                    }
                }
            }
            count++;
        }
    }
    console.log(bfs());
    index += 3; 
}