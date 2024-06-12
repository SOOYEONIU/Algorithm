const solution = (input) => {
    let [answer, sumNum] = [0, 0];
    let [[N, M], tempArr] = input;
    let lp = 0;
    
    for (let rp = 0; rp < N; rp++) {
        sumNum += tempArr[rp];
        while (sumNum > M) { 
            sumNum -= tempArr[lp++];
        }
        answer += (rp - lp + 1);
    }

    return answer;
}
let input = `5 5
1 3 1 2 3`.split('\n').map(ele => ele.split(' ').map(Number));
console.log(solution(input));

// rp =  / lp = 
// 1  3  1  2  3
//      rp lp 
// 1 => rp : 0 / answer : 1
// 1  3 => rp : 0 / lp : 1 / answer: 2
//    3 
// 1  3  1 => rp : 0 / lp : 2 / answer : 3
//    3  1
//       1
//       1  2 => rp: 2 / lp : 3 / answer : 2
//          2 
// ...
// 규칙 : rp - lp + 1