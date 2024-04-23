const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split("\n").map(el => el.split(" ").map(Number));

const N = +input[0].shift();
const M = +input.shift();

let sum = 0; 
let maxSum = 0;

//첫 번째 카드
for (let i = 0; i < N - 2; i++) { 
    //두 번째 카드
    for (let j = i + 1; j < N - 1; j++) { 
        //세 번째 카드
        for (let k = j + 1; k < N; k++) { 
            sum = input[0][i] + input[0][j] + input[0][k];

            if (sum <= M && sum > maxSum) { 
                //해당 되면 maxSum값을 sum값으로 변경
                maxSum = sum;
            }
        }
    }
}//첫번째 for문

console.log(maxSum);