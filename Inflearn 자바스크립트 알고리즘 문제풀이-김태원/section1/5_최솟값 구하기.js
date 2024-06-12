function solution(arr) {
    let answer;
    arr.sort((a, b) => a - b);
    answer = arr[0];
    return answer;

}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));