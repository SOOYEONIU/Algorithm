const solution = (tempArr) => { 
    for (let i = 0; i < tempArr.length; i++) { 
        let index = i;
        for (let j = i + 1; j < tempArr.length; j++) { 
            if (tempArr[index] > tempArr[j]) index = j;
        }
        [tempArr[i], tempArr[index]] = [tempArr[index], tempArr[i]];
    }

    return tempArr;
}
let input = [13, 5, 11, 7, 23, 15];
console.log(solution(input));
