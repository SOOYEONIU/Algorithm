const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
let testCase = Number(input.shift()); // 테스트 케이스
let index = 0; // input 인덱스를 3씩 더해줘 테스트 케이스 별로 값 활용할 수 있도록 함

for (let i = 0; i < testCase; i++) { 
    let L = Number(input[index]); // 체스판 한 변의 길이
    let arr = Array.from(Array(L), () => new Array(L).fill(0)); // 2차원 배열 만들기
    let [sx, sy] = [ // sx : 현재 있는 칸의 x좌표, sy : 현재 있는 칸의 y좌표
        Number(input[index + 1].split(' ')[0]),
        Number(input[index + 1].split(' ')[1])
    ];
    let [lx, ly] = [ // lx : 이동하려고 하는 칸의 x좌표, ly : 이동하려고 하는 칸의 y좌표
        Number(input[index + 2].split(' ')[0]),
        Number(input[index + 2].split(' ')[1])
    ];

    //현재 있는 칸 1 표시
    arr[sx][sy] = 1;

    //인접 노드를 우선적으로 탐색하기 때문에 BFS 너비 우선 순회
    const bfs = () => { 
        let count = 0; // 나이트 최소값
        // 8가지 이동표 
        let distraciton = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
        let queue = [];
        queue.push([sx, sy]); // 시작좌표 queue에 넣음

        while (queue.length) { // queue.length가 0이 되기 전까지
            let len = queue.length; // ← 없으면 안됨.

            for (let i = 0; i < len; i++) { 
                let value = queue.shift(); // 맨 앞 좌표 꺼내기
                if (value[0] === lx && value[1] === ly) { 
                    //만약 꺼낸 좌표 값이 lx, ly와 같다면 coun값 출력
                    return count;
                }

                // 8가지 방향표 대로 돌려서 이동하기
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