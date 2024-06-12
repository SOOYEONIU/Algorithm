const solution = (tempArr) => { 
    for (let i = 0; i < tempArr.length - 1; i++) { 
        for (let j = 0; j < tempArr.length - i - 1; j++) { 
            if (tempArr[j] > 0 && tempArr[j + 1] < 0) { 
                [tempArr[j], tempArr[j + 1]] = [tempArr[j + 1], tempArr[j]];
            }
        }
    }
    return tempArr;
}
let input = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(input));