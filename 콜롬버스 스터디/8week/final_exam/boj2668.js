const fs = require('fs');
let [n, ...input] = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(Number);

const solution = (n, tableCells) => {
    let collection = [];
    for (let i = 0; i < n; i++) {
        if (tableCells.sort((a, b) => a - b).map(v => (v === i + 1))) { 
            collection.push((i + 1));
        }
        if (tableCells[(tableCells[i] - 1)] === (i + 1)) { 
            collection.push(i + 1);
        }
    }
    console.log(collection.length); 
    console.log(collection.sort((a, b) => a - b).join('\n'));
}
solution(n, input);

`
반례를 찾음
입력값
6
2
3
1
5
4
6

출력값
6
1
2
3
4
5
6
`