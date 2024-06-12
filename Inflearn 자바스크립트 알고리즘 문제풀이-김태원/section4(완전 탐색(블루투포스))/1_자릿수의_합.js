const solution = (tempN, tempDummy) => { 
    let answer, maxSum = 0;
    for (let i = 0; i < tempN; i++) { 
        let currentSum = 0;
        for (let j = 0; j < tempDummy[i].length; j++) { 
            currentSum += Number(tempDummy[i][j]);
        }
        if (maxSum <= currentSum) { 
            maxSum = currentSum;
            if (answer < Number(tempDummy[i])) {
                answer = Number(tempDummy[i]);
            }
        }
    }
    return answer;
}

let input = `7
128 460 603 40 521 137 123`;

let [N, dummyNum] = input.split('\n');
let dummyArr = dummyNum.split(' ');

console.log(solution(N, dummyArr));