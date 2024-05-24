let input = `5 
5 3 7 2 3
3 7 1 6 1
7 2 5 3 4
4 3 6 4 1
8 7 3 5 2`;

let inputArr = input.split('\n');
let N = Number(inputArr.shift());
let newBoard = inputArr.map(v => v.split(' ').map(Number));

const solution = (tempN, tempBoard) => { 
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, -1, 0, 1];

    const dfs = (ix, iy) => { 
        let bonguri = true;
        for (let i = 0; i < 4; i++) { 
            let nx = ix + dx[i];
            let ny = iy + dy[i];

            if (nx >= 0 && nx < tempN && ny >= 0 && ny < tempN ) {
                if (tempBoard[nx][ny] < tempBoard[ix][iy]) {
                    continue;
                } else { 
                    bonguri = false;
                    return bonguri;
                }
            } 
        }
        return bonguri;
    }

    for (let i = 0; i < tempN; i++) { 
        for (let j = 0; j < tempN; j++) { 
            let result = dfs(i, j);

            if (result) {
                answer += 1;
            }
        }
    }

    return answer
}

console.log(solution(N, newBoard));