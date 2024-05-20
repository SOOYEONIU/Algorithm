// 알고리즘 스터디에서 일곱난쟁이 문제 풀었었음 : 다시풀기
const solution = (inputArr) => { 
    let answer;

    let totalSum = 0;
    inputArr.sort((a, b) => a - b);
    for (let i = 0; i < inputArr.length; i++) { 
        totalSum += inputArr[i];
    }
    let notNan = totalSum - 100;

    for (let i = 0; i < inputArr.length; i++) { 
        for (let j = i+1; j < inputArr.length; j++) { 
            if ((inputArr[i] + inputArr[j]) == notNan) { 
                inputArr.splice(i, 1);
                inputArr.splice(j-1, 1);
                break;
            }
        }
    }
    answer = inputArr;

    return answer;
}

let tempArr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

let resultArr = solution(tempArr);
console.log(resultArr.join(' '));