const solution = (lastNum) => {
    let answer = [];
    let chList = Array.from({ length: lastNum + 1 }, () => 0);
    const DFS = (tempNum) => { 
        if (tempNum === lastNum + 1) {
            let temp = '';
            for (let i = 1; i <= lastNum; i++) { 
                if (chList[i] === 1) { 
                    temp += i + " ";
                }
            }
            if(temp.length > 0) answer.push(temp.trim());
        } else { 
            chList[tempNum] = 1;
            DFS(tempNum + 1);
            chList[tempNum] = 0;
            DFS(tempNum + 1);
        }
    }
    DFS(1);

    return answer.join('\n');
}
console.log(solution(3));