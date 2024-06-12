const solution = (tempArr, tempNum) => {
    let answer = '';

    for (let tempStr of tempArr) { 
        if (answer.length < tempStr.length) { 
            answer = tempStr;
        }
    }
    return answer;
}
let input = `5
teacher
time
student
beautiful
good`;

let tempInput = input.split("\n");
let strNum = Number(tempInput.shift());

console.log(solution(tempInput, strNum));