const solution = (stringDummy) => { 
    let answer = true;

    let dummyArr = [];
    let tempString = '';
    for (let i = 0; i < stringDummy.length; i++) { 
        if (stringDummy[i] === ',' || stringDummy[i] === ';' || stringDummy[i] === ':' ) {
            dummyArr.push(tempString);
            tempString = '';
        } else if (stringDummy[i] === ' ') {
            continue
        } else if (i === stringDummy.length - 1) { 
            tempString += stringDummy[i];
            dummyArr.push(tempString);
        }
        else {
            tempString += stringDummy[i];
        }
    }
    console.log(dummyArr) // 더미 배열 만들기 완성
    for (let i = 0; i < dummyArr.length / 2; i++) { 
        for (let j = 0; j < dummyArr[i].length; j++) { 
            console.log((dummyArr[i][j].toUpperCase()).charCodeAt() >= 65 && (dummyArr[i][j].toUpperCase()).charCodeAt() <= 90)
        } 
    }

    return answer === true ? 'YES' : 'NO';
}

let input = `found7, time: study; Yduts; emit, 7Dnuof`;

solution(input);