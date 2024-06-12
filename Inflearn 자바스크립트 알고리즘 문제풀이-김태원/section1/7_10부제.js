const solution = ( inputDate, inputArr ) => { 
    let answer = 0;
    let oneNum = inputDate[inputDate.length - 1];
    for (let i = 0; i < inputArr.length; i++) { 
        if (Number(String(inputArr[i])[1]) == oneNum) { 
            answer++;
        }
    }
    return answer;
}

let input = `0
12 20 54 30 87 91 30`;

let [dayNum, ...tempArr] = input.split('\n');
let carArr = tempArr[0].split(' ');

console.log(solution(dayNum, carArr));