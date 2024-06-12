// 문제에 대한 이해
// M번의 수학테스트 등수
// A학생이 멘토이고 B학생이 멘티였을 때, A학생은 M번의 수학테스트에서 B학생의 등수보다 앞서야 한다.
// M번의 수학성적이 주어지면, 멘토, 멘티 짝을 만들 수 있는 경우가 몇 가지인지 구하는 문제

const solution = ( tempN, tempM, tempArr ) => { 
    let answer = 0;
    let matchingM = Array.from(Array(tempM), () => new Array());
    
    for (let i = 0; i < tempM; i++) { 
        for (let j = 0; j < tempN; j++) { 
            for (let k = j+1; k < tempN; k++) { 
                let mthMen = [tempArr[i][j], tempArr[i][k]];
                if (i === 0) {
                    matchingM[i].push(mthMen);
                } else {
                    if (matchingM[i-1].some(arr => arr.length === mthMen.length && arr.every((value, index) => value === mthMen[index]))) {
                        matchingM[i].push(mthMen);
                    }
                } 
            }
        }
    }
    answer = matchingM[matchingM.length - 1].length;
    return answer;
}

let input = `4 3
3 4 1 2
4 3 2 1
3 1 4 2`;

let wantArr = input.split('\n').map(v => v.split(' ').map(Number));
let [N, M] = wantArr.shift();

console.log(solution( N, M, wantArr ));