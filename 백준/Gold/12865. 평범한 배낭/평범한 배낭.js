const fs = require('fs');
let [[N, K], ...arr] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(value => value.split(' ').map(Number));
// N : 물품의 수, K : 준서가 버틸 수 있는 무게, arr : ([a, b])각 물건의 무게 W와 해당 물건의 가치 V
// 구하는 수는 물건 무게에 맞는 최대 가치 구하기

const solution = (N, K, arr) => {
    const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));
    for (let i = 1; i < N + 1; i++) { 
        const [W, V] = arr[i-1]; // W: 무게, V: 가치
        for (let j = 1; j <= K; j++) { 
            // j 최대 가능한 무게
            if (j - W >= 0) {
                // j - W : 여유분 (가능한 최대 무게 - 현재 아이템 무게)
                // 새 아이템의 무게를 넣는 경우와 안 넣는 경우 중 더 큰 가치를 따진다.
                dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[N][K];
}

console.log(solution(N, K, arr));