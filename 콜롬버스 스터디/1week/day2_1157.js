//input
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
let input = fs.readFileSync(filePath).toString().trim();
let upperInput = input.toUpperCase();

const maxStr = (strV) => {
    const strObject = {};
    let [ maxNum, maxValue ] = [ 0, '' ];

    for( let str of strV ) {
        if( !strObject[str] ) {
            strObject[str] = 1;
        } else {
            strObject[str]++;
        }
    }
    for( let strKey in strObject ) {
        if( strObject[strKey] == maxNum ) {
            maxValue = '?';
        } else if ( strObject[strKey] > maxNum ) {
            maxNum = strObject[strKey];
            maxValue = strKey;
        }
    }
    return maxValue;
}//maxStr();

//output
console.log(maxStr(upperInput));
