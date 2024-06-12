const fs = require('fs');
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim();

input = Number(input);

resultV = 0;
const fibonacciN = (N) => { 
    if (N == 0) { return 0; }
    else if (N == 1) { return 1; }
    else { return fibonacciN(N - 1) + fibonacciN(N - 2); }
}//fibonacciN

console.log(fibonacciN(input));