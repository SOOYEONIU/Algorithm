const solution = (bubbleSort) => { 
    for (let i = 0; i < bubbleSort.length - 1; i++) { 
        for (let j = 0; j < bubbleSort.length - i - 1; j++) { 
            if (bubbleSort[j] > bubbleSort[j + 1]) { 
                [bubbleSort[j], bubbleSort[j + 1]] = [bubbleSort[j + 1], bubbleSort[j]];
            } 
        }
    }
    return bubbleSort;
}
let input = [13, 5, 11, 7, 23, 15];
console.log(solution(input));