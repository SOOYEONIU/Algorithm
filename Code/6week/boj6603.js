const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const combinations = (arr, n) => { 
    const result = [];

    if (n == 1) { 
        return arr.map((v) => [v]);
    }

    arr.forEach((current, index, array) => { 
        const restArr = arr.slice(index + 1); // current값 제외 나머지 별도 리스트 저장
        const comb = combinations(restArr, n - 1); // 위 리스트 받아서, 재귀함수 호출
        const attachArray = comb.map((combValue) => [current, ...combValue]); // 위의 반환값 + current => 새로운 배열로 변환

        console.log(attachArray)
        result.push(...attachArray); // 신규 배열 result 추가
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
