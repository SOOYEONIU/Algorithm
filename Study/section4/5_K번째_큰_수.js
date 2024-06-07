// 문제 이해
// 1~100까지 숫자가 적힌 N장의 카드 (같은 숫자 가능)
// 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 한다. 기록한 값 중 K번째로 큰 수를 출력하는 프로그램
const solution = (tempInfo) => {
    let answer = 0;

    let [N, K] = tempInfo.shift(); // N장의 카드, K번째로 큰 수
    let dummyN = tempInfo[0];

    let sumArr = [];
    for (let i = 0; i < N; i++) { 
        for (let j = i+1; j < N; j++) { 
            for (let k = j+1; k < N; k++) { 
                sumArr.push(dummyN[i] + dummyN[j] + dummyN[k]);
            }
        }
    }
    sumArr.sort((a, b) => b - a);
    let count = 0;
    for (sumNum of sumArr) { 
        console.log(sumNum, answer)
        if (count === 3) {
            break;
        }

        if (sumNum !== answer) {
            answer = sumNum;
            count++;
        } else { 
            continue;
        }
    }

    return answer;
}
let input = `10 3
13 36 15 23 45 65 33 11 26 42`;

let infoArr = input.split('\n').map(v => v.split(' ').map(Number));

console.log(solution(infoArr));