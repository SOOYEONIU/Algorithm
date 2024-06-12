const solution = (tempArr) => {
    for (let i = 0; i < tempArr.length; i++) { 
        let tmp = tempArr[i];
        let j;
        for (j = i-1; j >= 0; j--) { 
            if (tmp < tempArr[j]) {
                tempArr[j + 1] = tempArr[j];
            } else {
                break;
            }
        }
        tempArr[j + 1] = tmp;
    }
    console.log(tempArr)
}
let input = [11, 7, 5, 6, 10, 9];
solution(input);