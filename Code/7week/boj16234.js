const fs = require('fs');
let land = fs.readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(Number));
`
예제 입력 1
2 20 50
50 30
20 40

 ex
 50 | 30
---------
 20 | 40
`
// N X N 땅 / L명 이상 R명 이하일 경우 국경선 열기
let [N, L, R] = land.shift();

// 상하좌우 좌표
let dx = [-1, 0, 1, 0];
let dy = [0, -1, 0, 1];

// 시작 노드에서부터 한 경로를 따라 깊게 탐색한 후, 다른 경로를 탐색하도록 자료구조 스택을 이용하여 DFS 구현
const dfs = (start, visited) => {
    let stack = [start]; // 인접해 있는 곳의 좌표를 담은 스택
    let saveBox = [start]; // 연합을 이루고 있는 칸의 수를 파악하기 위한 배열

    let [sx, sy] = start;
    visited[sx][sy] = true; // 현재 좌표 방문 표시
    let population = land[sx][sy]; // 연합의 인구수
    
    //stack길이가 0 이상일 경우 반복문 실행
    while (stack.length > 0) {
        const [x, y] = stack.pop();

        for (let i = 0; i < 4; i++) { // 해당 나라의 상, 하, 좌, 우에 있는 나라에 대한 반복문 
            const [nx, ny] = [
                x + dx[i],
                y + dy[i]
            ];
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
                //diff는 두 나라의 인구 차이를 담은 변수이며 Math.abs()함수로 절댓값 변환
                let diff = Math.abs(land[x][y] - land[nx][ny]);

                if (L <= diff && R >= diff) { //diff가 L이상 R이하 일경우 → 연합
                    stack.push([nx, ny]); // 연합할 나라의 좌표를 stack에 좌표를 넣어주고
                    population += land[nx][ny]; // 연합할 나라의 인구수를 추가
                    visited[nx][ny] = true; // 연합한 나라에 방문했다는 표시 추가
                    saveBox.push([nx, ny]); // 연합을 이루고 있는 나라의 배열에 좌표를 넣어준다.
                }
            }
        }
        //이후 stack의 길이가 0이 되기 전까지 위의 과정을 반복한다.
    }
    console.log('saveBox',saveBox)
    `
    saveBox [ [ 0, 0 ], [ 1, 0 ], [ 0, 1 ], [ 1, 1 ] ]
    `
    // 연합된 나라끼리 각 칸의 인구수를 계산 → (연합의 인구수)/(연합을 이루고 있는 칸의 개수)
    saveBox.forEach(([x, y]) => land[x][y] = Math.floor(population / saveBox.length));
    
    return saveBox.length;
}

let day = 0; // 인구 이동이 며칠 동안 발생하는지
while (true) {
    //국경선이 열려있는 시간이 하루이기 때문에 다음날 모두 다시 리셋되도록 while 반복문 안에 넣었다.
    let visited = Array.from(Array(N), () => new Array(N).fill(false));
    let flag = false; // 국경선이 열리고 인구 이동이 이뤄졌으면 true, 그렇지 않으면 false

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) { //[i,j]에 방문하지 않았을 경우 
                const unionCount = dfs([i, j], visited); //dfs 함수 실행 → 변수에 값을 담는다.
                
                //unionCount의 수가 1일 경우 연합한 나라가 없다는 뜻 → flag = false
                //unionCount의 수가 1보다 클 경우 연합한 나라가 1개 이상이라는 뜻 → flag = true;
                if (unionCount > 1) flag = true;
            }
        }
    }
    if (!flag) break; // 연합한 나라가 없기 때문에 인구이동이 일어나지 않아 break 함.
    day++; // 인구 이동이 일어났을 때 day의 값을 증가한다.
}

console.log(day);