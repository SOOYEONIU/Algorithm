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

    for (let i = 0; i < tempN; i++) { 
        for (let j = 0; j < tempN; j++) { 
            let bonguri = true;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];

                if (nx >= 0 && nx < tempN && ny >= 0 && ny < tempN && tempBoard[nx][ny] >= tempBoard[i][j]) {
                    bonguri = false;
                    break;
                }
            }
            if (bonguri) {
                answer++;
            }
        }
    }
    return answer;
}

console.log(solution(N, newBoard));