const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

let testCase = Number(input.shift());
let index = 0;

const solution = () => { 
    for (let i = 0; i < testCase; i++) { 
        let n = input[index];
        let arr1 = input[index + 1].split(' ').map(Number); 
        let arr2 = input[index + 2].split(' ').map(Number);

        const dp = [[0, arr1[0], arr2[0]]];
        for (let j = 1; j <= n; j++) { 
            dp[j] = [
                // 이전 열에서 최댓값(아무것도 고르지 않았으니 최대값을 고르면 된다.)
                Math.max(...dp[j - 1]),
                // 이전 열에서 아무것도 고르지 않은 경우와 이전 열에서 아래의 행을 골랐을 경우의 최대값
                Math.max(dp[j - 1][0], dp[j - 1][2]) + arr1[j],
                // 이전 열에서 아무것도 고르지 않은 경우와 이전 열에서 위의 행을 골랐을 경우 최대값
                Math.max(dp[j - 1][0], dp[j - 1][1]) + arr2[j],
            ];
        }
        console.log(Math.max(...dp[n - 1]));

        index = index + 3;   
    }
}
solution();