let input = `5
10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19`;

let inputArr = input.split('\n');
let N = Number(inputArr.shift());
let newBoard = inputArr.map(v => v.split(' ').map(Number));

// 행합 구한 최대값, 열합 구한 최대값, 대각선합 구한 최대값 중 최대값 출력
const solution = (tempNum, tempBoard) => {
    let answer = 0;

    let [sum3, sum4] = [0, 0] // 대각선, 역대각선
    for (let i = 0; i < tempNum; i++) { 
        let [sum1, sum2] = [0, 0];
        for (let j = 0; j < tempNum; j++) { 
            sum1 += tempBoard[i][j];
            sum2 += tempBoard[j][i];

            if (i === j) { 
                sum3 += tempBoard[i][j];
            }
            if (i + j === 5) { 
                sum4 += tempBoard[i][j];
            }
        }

        if (answer < sum1) answer = sum1;
        if (answer < sum2) answer = sum2;
    }
    if (answer < sum3) answer = sum3;
    if (answer < sum4) answer = sum4;

    return answer;
}

console.log(solution(N, newBoard));