let input = `6
100 100 100 30 29 40`;

let inputArr = input.split('\n');
let [N, scoreArr] = [Number(inputArr[0]), inputArr[1].split(' ').map(Number)];

// b-a 내림차순으로 정렬한다음에 그 정렬된 배열은 while문 돌리고 하나씩 점수를 찾아감 (이중 반복문) 찾았으면 원소 삭제, 정렬된 배열에 원소가 없으면 반복문 탈출

const solution = (tempNum, tempArr) => {
    let answer = Array.from({ length: tempNum }, () => 0 );
    let copyArr = [...tempArr];
    tempArr.sort((a, b) => b - a);
    let [lineNum, maxNum] =[ 0, 0 ];
    
    while (tempArr.length > 0) {
        if (maxNum === tempArr[0]) {
            for (let i = 0; i < N; i++) {
                if (maxNum === copyArr[i]) {
                    answer[i] = lineNum;
                }
            }
            tempArr.shift();
        } else {
            maxNum = tempArr[0];
            tempArr.shift();
            lineNum += 1;

            for (let i = 0; i < N; i++) {
                if (copyArr[i] === maxNum) {
                    answer[i] = N - tempArr.length;
                 }
            }
        }
        
    }
    return answer;
}

let result = solution(N, scoreArr);
console.log(result.join(' '));