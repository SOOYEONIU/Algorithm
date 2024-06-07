// 투포인터 문제로 입력해야한다. sort()는 시간복잡도가 O(n log n)이기 때문에 sort를 통한 알고리즘이 투포인터 알고리즘을 활용
const solution = (tempInfo) => { 
    let answer = [];
    let [N, M] = [Number(tempInfo[0]), Number(tempInfo[2])];
    let [arrA, arrB] = [tempInfo[1].split(' ').map(Number), tempInfo[3].split(' ').map(Number)];
    let [pointer1, pointer2] = [0, 0];

    while (pointer1 < N && pointer2 < M) { 
        if (arrA[pointer1] <= arrB[pointer2]) {
            answer.push(arrA[pointer1++]);
        } else { 
            answer.push(arrB[pointer2++]);
        }
    }
    while (pointer1 < N) answer.push(arrA[pointer1++]);
    while (pointer2 < M) answer.push(arrB[pointer2++]); 

    return answer.join(' ');
}

let input = `3
1 3 5
5
2 3 6 7 9`;

let infoArr = input.split('\n');

console.log(solution(infoArr));