const solution = (tempInput) => { 
    let answer = false;
    let firstMap
    for (tempString of tempInput) {
        let newMap = new Map();

        for (let i = 0; i < tempString.length; i++) { 
            if (!newMap.has(tempString[i])) {
                newMap.set(tempString[i], 1);
            } else {
                newMap.set(tempString[i], newMap.get(tempString[i]) + 1);
            }
        }
        let newArray = [...newMap].sort();
        if (JSON.stringify(newArray) === JSON.stringify(firstMap)) { 
            answer = true;
            break;
        }
        firstMap = newArray;
    }

    return answer ? 'YES' : 'NO';
}
let input = `AbaAeCe
baeeACA`.split('\n');

console.log(solution(input));