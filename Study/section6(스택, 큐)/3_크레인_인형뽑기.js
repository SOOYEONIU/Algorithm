const solution = (boardArr, movesArr) => { 
    let toyNum = 0;
    let stack = [];

    for (let i = 0; i < movesArr.length; i++) { 

        for (let j = 0; j < boardArr.length; j++) { 
            if (boardArr[j][movesArr[i] - 1]!== 0) { 
                if (boardArr[j][movesArr[i] - 1] === stack[stack.length - 1]) {
                    stack.pop();
                    toyNum += 2;
                } else {
                    stack.push(boardArr[j][movesArr[i] - 1]);
                }
                boardArr[j][movesArr[i] - 1] = 0;
                break;
            }

        }
    }
    return toyNum;
}
let boardArr = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
let movesArr = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(boardArr, movesArr));