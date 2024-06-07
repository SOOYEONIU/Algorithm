const solution = (tempArr) => { 
    let answer;
    let [studentNum, everyVote]= [tempArr[0], tempArr[1]];
    console.log(studentNum, everyVote)
    let resultVote = {};

    // 결과 Object 만들기
    for (let i = 0; i < everyVote.length; i++) { 
        if (!Object.keys(resultVote).includes(everyVote[i])) {
            resultVote[everyVote[i]] = 1;
        } else { 
            resultVote[everyVote[i]]++;
        }
    }

    // 학급 회장 투표 가장 많은 사람 뽑기
    let currentTop = 0;
    for (let member in resultVote) { 
        if (currentTop < resultVote[member]) { 
            answer = member;
            currentTop = resultVote[member];
        }
    }

    return answer;
}
let input = `15
BACBACCACCBDEDE`.split('\n');
console.log(solution(input));