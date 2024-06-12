//input
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let patternNum = parseInt(input[0].trim()); // 첫 번째 줄 : 파일의 개수 N
let commonRule = input[1].trim().split('*'); // 두 번째 줄 : [ 앞 패턴, 뒤 패턴 ]
let printValue = ''; // 출력 값

//output
for( let i = 0; i < patternNum; i++ ) {
    let valueLength = input[i+2].trim().length; // 줄마다 문자열 길이 

    if( (commonRule[0] + commonRule[1]).length > valueLength ){ // 패턴 총 길이가 문자열의 길이보다 길면 NE 출력
        printValue = 'NE';
    } else if ( // 앞 패턴, 뒤 패턴 모두 true일 경우 DA 출력
        input[i+2].slice(0, commonRule[0].length) == commonRule[0] 
        && input[i+2].trim().slice( valueLength - ( commonRule[1].length ) , valueLength ) == commonRule[1] ) {
        printValue = 'DA';
    } else { // 위의 조건이 아닌 것은 NE 출력
        printValue = 'NE';
    }
    console.log(printValue);
}
