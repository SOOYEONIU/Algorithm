const solution = (tempArr) => { 
    let answer = 0;
    let[[N, K], infoArr] = tempArr; // N일 동안 매출 기록, K일 동안 최대 매출액이 얼마인지 구하기
    let left = 0;
    let right = 0;
    let maxSum = 0;

    while (right < N) {
        maxSum += infoArr[right++];
        if ((right - left) === 3) { 
            answer = answer < maxSum ? maxSum : answer;
            maxSum -= infoArr[left++]; 
        }
    
        answer = answer < maxSum ? maxSum : answer;
    }

    return answer;
}
let input = `10 3
12 15 11 20 25 10 50 19 13 15`.split('\n').map(ele => ele.split(' ').map(Number));

console.log(solution(input));