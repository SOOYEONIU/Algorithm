const fs = require('fs');

const inputN = parseInt(fs.readFileSync(__dirname + '/input.txt').toString().trim());

let result = [];

const factorizeSum = (N) => {
    for (let i = 0; i <= N; i++) {
        let M = String(i);

        let digit = M.split("").map((x) => Number(x));

        let sum = 0;

        for (let j = 0; j < digit.length; j++) {
            sum += digit[j];
        }

        sum += Number(M);

        if (sum === N) {
            result.push(M);
        }
    }

    if (result.length === 0) {
        return 0;
    } else {
        return Math.min(...result);
    }
}
console.log(factorizeSum(inputN));