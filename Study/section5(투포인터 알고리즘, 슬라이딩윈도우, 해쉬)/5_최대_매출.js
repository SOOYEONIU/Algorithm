const solution = (tempArr) => { 
    let answer = 0;
    let[[N, K], infoArr] = tempArr; // N일 동안 매출 기록, K일 동안 최대 매출액이 얼마인지 구하기
    let lp= 0;
    let rp = lp + 2;

    while (rp < N) {
        let maxSum = 0;
        for (let i = lp; i <= rp; i++) {
            maxSum += infoArr[i];
        }
        lp++;
        rp = lp + 2;

        answer = answer < maxSum ? maxSum : answer;
    }

    return answer;
}
let input = `10 3
12 15 11 20 25 10 20 19 13 15`.split('\n').map(ele => ele.split(' ').map(Number));

console.log(solution(input));