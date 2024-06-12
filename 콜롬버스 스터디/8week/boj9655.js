const fs = require('fs');
let N = +fs.readFileSync(__dirname + '/input.txt').toString().trim();
`
N = 1일 경우
-> SK 먼저 시작 => SK 승
N = 2일 경우
-> SK 먼저 시작 SK 1, CY 1 => CY승
N = 3일 경우
-> SK 1, CY 1, SK 1 OR SK 3 => SK 승
N = 4일 경우
-> SK 1, CY 3 OR SK 3, CY 1 OR SK 1, CY 1, SK 1, CY 1 => CY 승

따라서, stone 갯수가 홀수일 경우 SK가 승리, 짝수일 경우 CY가 승리하는 규칙을 찾았다.
`
const stoneGame = (stoneNum) => { 
    return stoneNum % 2 === 0 ? 'CY' : 'SK';
}

console.log(stoneGame(N));