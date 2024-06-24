const fs = require('fs');
let [N, K] = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt')
    .toString()
    .trim()
    .split(' ')
    .map(Number);
// N : 수빈이 있는 위치 / K : 동생이 있는 위치
// X-1, X+1, 순간이동의 경우: 2*X

const solution = (N, K) => { 
    let queue = [N];
    let ch = new Array(100001).fill(0);
    let cnt = 0;
    let level = 3;

    while (queue.length) {
        let len = queue.length;
        for (let i = 0; i < len; i++) {
            let current = queue.shift();
            if (current === K) {
                return cnt;
            }
            for (let nx of [current - 1, current + 1, current * 2]) {
                if (nx >= 0 && nx <= 100000 && ch[nx] === 0) {
                    ch[nx] = 1;
                    queue.push(nx);
                }
            }
        }
        cnt++;
    }

    return cnt;
}

console.log(solution(N, K));