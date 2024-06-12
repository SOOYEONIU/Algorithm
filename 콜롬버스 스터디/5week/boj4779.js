const fs = require('fs');
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split('\n');

const cantore = (N) => { 
    if (N == 1) {
        return "-";
    } else { 
        let value = Math.floor(N / 3); // N을 3으로 나눴을 때 몫 값
        let startEnd = cantore(value); // N 값이 1이 될때까지 재귀함수 실행
        let center = " ".repeat(value); // center는 공백으로 대체
        return startEnd + center + startEnd; 
    }
}//cantoe

const result = input.map(Number => {
    return cantore(3**Number);
});

// 출력
console.log(result.join("\n"));
