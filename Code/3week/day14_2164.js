const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let N = Number(fs.readFileSync(filePath).toString().trim());

const cardBox = [];

for (let i = 1; i <= N; i++) { 
    cardBox.push(i);
}

//나머지 하나 남은 카드 구하는 함수
const oneCard = (arr) => { 
    for (let i = 0; i < N; i++) { 
        arr.shift();
        arr.push(arr.shift());
        if (arr.length == 1) { break; }
    }
    if (arr.length == 1) { console.log(arr[0]); }
}//oneCard

oneCard(cardBox);
