const fs = require('fs');
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim();

input = Number(input);

resultV = 0;
const fibonacciN = (N) => { 
    for (let i = 0; i <= N; i++) {
        if (i == 0) {
            resultV = 0;
        } else if (i == 1) {
            resultV = 1;
        } else {
            resultV = fibonacciN(i - 2) + fibonacciN(i - 1);
        }
    }
    return resultV;
}//fibonacciN

console.log(fibonacciN(input));