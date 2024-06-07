const solution = (tempArr) => { 
    let answer;
    let [studentNum, everyVote]= [tempArr[0], tempArr[1]];
    let voteCount = {};

    for (let i = 0; i < everyVote.length; i++) { 
        if (!voteCount[everyVote[i]]) {
            voteCount[everyVote[i]] = 1;
        } else { 
            voteCount[everyVote[i]]++;
        }
    }

    // 학급 회장 투표 가장 많은 사람 뽑기
    let maxVotes = 0;
    for (let member in voteCount) { 
        if (maxVotes < voteCount[member]) { 
            answer = member;
            maxVotes = voteCount[member];
        }
    }

    return answer;
}
let input = `15
BACBACCACCBDEDE`.split('\n');
console.log(solution(input));