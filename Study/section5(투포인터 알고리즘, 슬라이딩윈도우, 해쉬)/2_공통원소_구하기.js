// A,B 집합의 공통 원소를 추출하여 오름차순으로 출력
const solution = (tempInfo) => { 
    let answer = [];
    let [N, M] = [Number(tempInfo[0]), Number(tempInfo[2])];
    let [arrA, arrB] = [tempInfo[1].split(' ').map(Number), tempInfo[3].split(' ').map(Number)]; 
    let pointer1 = 0;
    
    while (pointer1 < N) { 
        let pointer2 = 0;
        while (pointer2 < M) { 
            if (arrA[pointer1] === arrB[pointer2]) {
                answer.push(arrB[pointer2++]);
            } else {
                pointer2++;
            }
        }
        pointer1++;
    } 

    return answer.sort((a,b) => a-b).join(' ');
}
let infoArr = `5
1 3 9 5 2
5
3 2 5 7 8`.split('\n');
console.log(solution(infoArr));