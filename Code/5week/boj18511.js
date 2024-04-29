const fs = require('fs');
let input = (fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n')).map(N => N.split(' ').map(Number));


const [N, G] = input.shift(); // N: 기준 자연수 , G: K 개수
const K = input.shift(); // K: 원소 구성 배열

// console.log(N, G, K)

let resultNum = 0;

//첫번째 원소
for (let i = 0; i < G; i++) { 
    // console.log(K[i]);
    //두번째 원소
    let firstN = K[i];
    for (let j = 0; j < G; j++) { 
        let midN = K[j];
        //세번째 원소
        for (let k = 0; k < G; k++) { 
            let lastN = K[k];
            let comboNum= Number(String(firstN) + String(midN) + String(lastN));

            console.log(comboNum)
            if (comboNum > 10 && comboNum <= N && resultNum < comboNum ) {
                resultNum = comboNum;
            }
        }
    }
}

console.log(resultNum);