/*
하나의 부분집합을 만들고 반대편에는 안뽑인 것들이 부분집합이다.

총 합을 구한다음 부분집합 값의 합을 빼준다. 빼주고 남은 값이 부분집합 값의 합과 같으면 YES를 출력한다.

같은 결과가 없으면 NO를 출력한다.
*/

const solution = (tempV) => {
    let answer = 'NO';
    let flag = 0;
    let N = tempV.length;
    let total = tempV.reduce((a, b) => a + b);

    const DFS = (level, sum) => { 
        if (flag) return;

        if (level === N) {
            if ((total - sum) === sum) {
                answer = 'YES';
                flag = 1;
            }
        } else { 
            DFS(level + 1, sum + tempV[level]);
            DFS(level + 1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}
let input = [1, 3, 5, 6, 7, 10];
console.log(solution(input));