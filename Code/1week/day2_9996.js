//input
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let patternNum = parseInt(input[0].trim()); // 첫 번째 줄 : 파일의 개수 N
let commonRule = input[1].trim().split('*'); // 두 번째 줄 : 패턴(규칙 *로 구분)
let printValue = ''; // 출력 값

//output
for( let i = 0; i < patternNum; i++ ) {
    let valueLength = input[i+2].trim().length;

    if( (commonRule[0] + commonRule[1]).length > valueLength ){
        printValue = 'NE';
    } else if (        
        input[i+2].slice(0, commonRule[0].length) == commonRule[0] 
        && input[i+2].trim().slice( valueLength - ( commonRule[1].length ) , valueLength ) == commonRule[1] ) {
        printValue = 'DA';
    } else {
        printValue = 'NE';
    }
    console.log(printValue);
}
