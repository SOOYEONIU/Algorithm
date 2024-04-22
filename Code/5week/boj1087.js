const fs = require('fs');
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim();

input = Number(input);

resultV = 0;
const fibonacciN = (N) => { 
    let i = 0;
    while (i <= N) { 
        switch (N) { 
            case 0: resultV = 0; break;
            case 1: resultV = 1; break;
            default: resultV = fibonacciN(i - 2) + fibonacciN(i - 1); break;
        }
        i++;
    }
    return resultV;
}//fibonacciN

console.log(fibonacciN(input));