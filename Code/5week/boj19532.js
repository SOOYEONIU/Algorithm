const fs = require('fs');
let [a, b, c, d, e, f] = fs.readFileSync(__dirname + '/input.txt').toString().trim().split(" ").map(Number);

let [x, y] = [0, 0];

const xyResult = ( a, b, c, d, e, f) => {
    for (let i = -999; i < 1000; i++) {
        for (let j = -999; j < 1000; j++) {
            if ((a * i) + (b * j) === c && (d * i) + (e * j) === f) {
                return [i, j];
            }
        }
    }
}

console.log(xyResult(a, b, c, d, e, f).join(" "));