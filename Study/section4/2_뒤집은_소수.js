const solution = (tempN, tempArr) => { 
    //숫자를 뒤집고 소수를 출력하는 방법
    let answer = [];
    for (let i = 0; i < tempN; i++) {
        let reNum = '';
        let correctNum = true;
        for (let j = 0; j < tempArr[i].length; j++) { 
            reNum = tempArr[i][j] + reNum;
        }

        if (Number(reNum) === 1) {
            correctNum = false;
        } else {
            for (let j = 2; j < Number(reNum); j++) {
                if (Number(reNum % j) === 0) {
                    correctNum = false;
                    break;
                }
            }
        }
        if (correctNum) { 
            answer.push(Number(reNum))
        }
    }
    return answer.join(' ');
}
let input = `9
32 55 62 20 250 370 200 30 100`;

let [N, dummyNum] = input.split('\n');
let inputArr = dummyNum.split(' ');

console.log(solution(N, inputArr));