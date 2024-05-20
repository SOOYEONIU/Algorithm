const solution = (tempArr) => { 
    let answer = [];
    for (let i = 0; i < tempArr.length; i++) { 
        if (tempArr[i] % 2 == 1) { 
            answer.push(tempArr[i]);
        }
    }
    return answer;
}

let inputArr = [12, 77, 38, 41, 53, 92, 85];
let resultArr = solution(inputArr);
let sumNum = 0; // 홀수끼리 합
let minNum = Number.MAX_SAFE_INTEGER; // 홀수 중 최솟값

for (let i = 0; i < resultArr.length; i++) { 
    sumNum += resultArr[i];

    if (minNum > resultArr[i]) { 
        minNum = resultArr[i];
    }
}
console.log(sumNum);
console.log(minNum);
