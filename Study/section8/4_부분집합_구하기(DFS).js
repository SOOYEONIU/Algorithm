const solution = (tempNum) => { 
    let answer = [];
    let chList = Array.from({ length: tempNum + 1 }, () => 0);
    console.log(chList)
    const DFS = (num) => { 
        if (num === tempNum + 1) {
            let tmp = '';
            for (let i = 1; i <= num; i++) { 
                if (chList[i] == 1) tmp += (i + " ");
            }
            if (tmp.length > 0) answer.push(tmp.trim());

        } else { 
            chList[num] = 1;
            DFS(num + 1);
            chList[num] = 0;
            DFS(num + 1);
        }
        console.log(chList)
    }
    DFS(1);
    return answer;
}
let input = 3;
console.log(solution(input).join('\n'));