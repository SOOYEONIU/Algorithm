const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const combinations = (arr, n) => { 
    const result = [];

    if (n == 1) { 
        return arr.map((v) => [v]);
    }

    arr.forEach((current, index, array) => { 
        const restArr = arr.slice(index + 1);
        console.log('rest',restArr)
        const comb = combinations(restArr, n - 1);
        console.log('comb',comb)
        const attachArray = comb.map((combValue) => [current, ...combValue]);

        result.push(...attachArray);
    })

    return result;
}

for (let i = 0; i < input.length; i++) {
    let arrayInfo = input[i].split(' ').map(Number);

    if (arrayInfo.shift() == 0) { 
        break;
    }

    console.log(combinations(arrayInfo, 6).map(value => value.join(" ")).join('\n'));
    console.log();
}
