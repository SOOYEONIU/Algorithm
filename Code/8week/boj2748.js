const fs = require('fs');
let input = +fs.readFileSync(__dirname + '/input.txt').toString().trim();

const arr = new Array(90);

const fibonacci = (n) => {
    arr[0] = BigInt(0);
    arr[1] = BigInt(1);

    for (let i = 2; i <= n; i++) {
        arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
    }

    return arr[n].toString();
}

console.log(fibonacci(input))