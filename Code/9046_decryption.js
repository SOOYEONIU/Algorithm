const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let inputLength = parseInt(input[0]);

//가장 많이 사용된 문자 출력 함수 but, 가장 많이 사용된 문자의 개수가 2개 이상일 경우 ? 출력
const maxChar = (str) => {
    const charObject = {}; //object 객체 {key 값(문자): value 값(빈도수)}
    let maxNum = 0; // 가장 많이 사용된 빈도수
    let maxChar = ''; // 가장 많이 사용된 문자

    for( let charV of str ) { 
        if(!charObject[charV]) {
            charObject[charV] = 1;
        } else {
            charObject[charV]++;
        }
    }
    
    for( let charV in charObject ) {
        if ( charObject[charV] == maxNum ) {
            maxChar = '?';
        } else if ( charObject[charV] > maxNum ) {
            max = charMap[charV];
            maxChar = charV;
        } 
    }
    return maxChar;
}//maxChar();

for( let i = 1; i <= inputLength; i ++ ) {
    console.log(maxChar(input[i].trim().replace(/ /g, '')));
}
