const compareMaps = (map1, map2) => { 
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) { 
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}
const solution = (tempInput) => { 
    let answer = 0;
    let [tempStr, subStr] = [tempInput[0], tempInput[1]];
    let tH = new Map();
    let sH = new Map();
    for (let str of subStr) { 
        sH.set(str, (sH.get(str) || 0) + 1);
    }
    let len = subStr.length-1;
    for (let i = 0; i < len; i++) { 
        tH.set(tempStr[i], (tH.get(tempStr[i]) || 0) + 1);
    }
    let lt = 0;
    for (let rt = len; rt < tempStr.length; rt++) { 
        tH.set(tempStr[rt], (tH.get(tempStr[rt]) || 0) + 1);

        if (compareMaps(tH, sH)) answer++;
        tH.set(tempStr[lt], tH.get(tempStr[lt])-1);
        if (tH.get(tempStr[lt]) === 0) tH.delete(tempStr[lt]);
        lt++;
    }

    return answer;
}
let input = `bacaAacba
abc`.split('\n');

console.log(solution(input));
