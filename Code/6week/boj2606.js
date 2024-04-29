const fs = require('fs');

let input = fs.readFileSync(__dirname + "/input.txt").toString().trim().split("\n");

const [computerNum, connectLink] = [Number(input.shift()), Number(input.shift())];

let someNum = input.map(num => num.split(' ').map(Number));

let numGraph = {};

for (let i = 0; i < someNum.length; i++) { 
    connectValue = [];
    if (numGraph[someNum[i][0]] != undefined) {
        numGraph[someNum[i][0]].push(someNum[i][1]);
    } else {
        connectValue.push(someNum[i][1]);
        numGraph[someNum[i][0]] = connectValue;
    };
}

resultNum = [];

for (key in numGraph) {
    for (let i = 0; i < numGraph[key].length; i++) { 
        if (key == 1) {
            resultNum.push(numGraph[key][i]);
        }
    }
}
for (let i = 0; i < numGraph[1].length; i++) {
    for (let j = 0; j < numGraph[resultNum[i]].length; j++) { 
        if (!resultNum.includes(numGraph[resultNum[i]][j])) { 
            resultNum.push(numGraph[resultNum[i]][j])
        } else { continue; }
    }
}

console.log(resultNum.length);