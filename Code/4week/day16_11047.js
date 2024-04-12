const fs = require("fs");
let input = fs.readFileSync(__dirname+'/input.txt').toString().trim().split("\n");
//N = 지폐 종류 , K = 최종 값
let [N, K] = input.shift().split(" ").map(Number);

//오름차순 -> 내림차순으로 정렬
const coins = input.map(Number).sort((a, b) => b - a);

let cnt = 0; // 최종 사용된 동전 개수

for (let coin of coins) { 
    //( 최종 값 / 높은 값-> 낮은 값 ) 연산을 한 다음 Math.floor로 나머지 빼고 사용된 동전 개수 cnt에 저장
    // console.log(K, coin)
    cnt += Math.floor(K / coin);
    
    //높은 coin 값부터 차례대로 나눠 나머지를 저장
    K = K % coin;
}

console.log(cnt);