//100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.
function solution(a, b, c) {
    let answer;
    
    if (a < b && a < c) {
        answer = a;
    } else if (b < a && b < c) {
        answer = b;
    } else if (c < a && c < b) { 
        answer = c;
    }

    return answer;
}

console.log(solution(6, 5, 11));
