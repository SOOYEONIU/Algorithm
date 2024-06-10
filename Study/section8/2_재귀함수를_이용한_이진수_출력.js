const solution = (tempNum) => {
    let result = '';
    const DFS = (tN) => { 
        if (tN === 0) { return }
        else {
            DFS(Math.floor(tN / 2)); 
            result += String(tN % 2);  
        }
    }
    DFS(tempNum);
    console.log(result);
}
let input = 8;
solution(input);