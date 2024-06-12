const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n').map(Number).sort((a,b) => a-b);

const solution = () => {
    let sum = 0;
    input.forEach(value => { sum += value });

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            const temp = sum - input[i] - input[j];

            if (temp === 100) {
                const answer = input.filter((ele) => ele !== input[i] && ele !== input[j]);

                return answer;
            }
        }
    }
}
let result = solution();
console.log(result.join('\n'));