const solution = (tempString) => { 
    let answer = true;

    let commonMode = tempString.toUpperCase();

    for (let i = 0; i < Math.floor(commonMode.length / 2); i++) { 
        if (commonMode[i] != commonMode[commonMode.length - 1 - i]) { 
            answer = false;
            break;
        }
    } 

    return answer == false ? 'NO' : 'YES';
}

let input = 'GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOG';

console.log(solution(input));
