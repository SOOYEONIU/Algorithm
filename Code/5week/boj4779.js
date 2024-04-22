const fs = require('fs');
let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split('\n');

const cantore = (str) => { 
    if (str.includes('---')) {
        const len = str.length / 3
        const splitedArr = []
        for (let i = 0; i <= str.length - len; i += len) {
            splitedArr.push(str.slice(i, i + len))
        }
        splitedArr[0] = cantore(splitedArr[0])
        splitedArr[1] = splitedArr[1].replaceAll("-", " ")
        splitedArr[2] = cantore(splitedArr[2])
        return splitedArr.join("")
    }
    return str
}//cantoe
const result = input.map(Number => {
    const dash = '-'.repeat(3 ** Number);
    return cantore(dash);
});

console.log(result.join("\n"));
