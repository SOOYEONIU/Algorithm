const fs = require('fs');
let N = +fs.readFileSync(__dirname + '/input.txt').toString().trim();

let result = [0];
const solution = (value) => { 
    result[1] = BigInt(1);
    result[2] = BigInt(2);

    if (value > 2) {
        for (let i = 3; i <= 1000; i++) {
            result[i] = (BigInt(result[i - 1]) + BigInt(result[i - 2])) % BigInt(10007);

            if (value === i) { break; }
        }
    }
    
    return result[value].toString(); 
}
console.log(solution(N));