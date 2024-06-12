let input = `8
130 135 148 140 145 150 150 153`;

let inputArr = input.split('\n');
let [N, heightArr] = [Number(inputArr[0]), inputArr[1].split(' ').map(Number)];

const solution = (tempNum, tempHeight) => {
    let [answer, maxHeight] = [0, 0];
    for (let i = 0; i < tempNum; i++) { 
        if (maxHeight < tempHeight[i]) {
            maxHeight = tempHeight[i];
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(N, heightArr));