// N개 수열 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램
const solution = (tempArr) => { 
    let answer = 0;

    let [[N, M], tempDummy]= [tempArr[0], tempArr[1]];

    let [lt, rt] = [0, 0];
    let sumNum = 0;
    while (rt < N) { 
        sumNum += tempDummy[rt++];
        if (sumNum === M) answer++;
        while (sumNum >= M) { 
            sumNum -= tempDummy[lt++];
            if (sumNum === M) answer++;
        }
    }        

    return answer;
}
let input = `8 6
1 2 1 3 1 1 1 2`.split('\n').map(v => v.split(' ').map(Number));
console.log(solution(input));