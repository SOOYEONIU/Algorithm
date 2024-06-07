const solution = (tempArr) => { 
    let answer;
    let [studentNum, everyVote]= [tempArr[0], tempArr[1]];
    let voteCount = new Map();
    
    for (let i = 0; i < everyVote.length; i++) { 
        if (!voteCount.has(everyVote[i])) {
            voteCount.set(everyVote[i], 1);
        } else { 
            voteCount.set(everyVote[i], voteCount.get(everyVote[i]) + 1);
        }
    }

    // 학급 회장 투표 가장 많은 사람 뽑기
    let maxVotes = 0;
    for (let [member, voteNum] of voteCount) { 
        if (maxVotes < voteNum) { 
            answer = member;
            maxVotes = voteNum;
        }
    }

    return answer;
}
let input = `15
BACBACCACCBDEDE`.split('\n');
console.log(solution(input));