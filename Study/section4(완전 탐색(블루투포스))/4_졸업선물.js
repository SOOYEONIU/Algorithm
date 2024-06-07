// 문제 이해
// 선생님이 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램
// 상품 하나를 50%해서 살 수 있는 쿠폰을 가지고 있다. -> 배송비는 할인에 포함되지 않음

const solution = (tempInfo) => { 
    let answer = 0;

    let [N, M] = tempInfo.shift(); // N: 반 학생수, M: 예산

    for (let i = 0; i < tempInfo.length; i++) {
        let sumPrice = [];
        let saleProduct = Math.floor(tempInfo[i][0] / 2) + tempInfo[i][1];
        for (let j = 0; j < tempInfo.length; j++) { 
            if (j == i) {
                sumPrice.push(saleProduct);
            } else { 
                sumPrice.push(tempInfo[j][0] + tempInfo[j][1]);
            }
        }        
        sumPrice.sort((a, b) => a - b);
        
        let [sumNum, count] = [0, 0];
        for (let j = 0; j < sumPrice.length; j++) {
            if (sumNum + sumPrice[j] <= M) {
                sumNum = sumNum + sumPrice[j];
                count++;
            } else if (count > answer) {
                answer = count;
            }
        }
    }
    
    return answer;
}

let input = `6 32
6 6
2 2
4 3
2 2
4 5
10 3`;

let infoArr = input.split('\n').map(v => v.split(' ').map(Number));

console.log(solution(infoArr));