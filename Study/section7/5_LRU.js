const solution = (workProcess, cacheSize) => { 
    let tempArr = [];

    for (let i = 0; i < workProcess.length; i++) { 
        if (tempArr.length < cacheSize) {
            tempArr.unshift(workProcess[i]);
        } else { 
            if (tempArr.includes(workProcess[i])) {
                let tmp = workProcess[i]; 
                for (let j = 0; j < tempArr.indexOf(workProcess[i]); j++) { 
                    tempArr[j + 1] = tempArr[j];
                }
                tempArr[0] = tmp;
            } else { 
                tempArr.pop();
                tempArr.unshift(workProcess[i]);
            }
        }
    }
    return tempArr.join(' ');
}
let workProcess = [1, 2, 3, 2, 6, 2, 3, 5, 7];
let cacheSize = 5;
console.log(solution(workProcess, cacheSize));