const solution = (tempInput) => { 
    let answer = "YES";

    let [firstSection, secondSection] = [tempInput[0], tempInput[1]];
    let hashMap = new Map();

    for (let tempStr of firstSection) { 
        if (!hashMap.has(tempStr)) hashMap.set(tempStr, 1);
        else hashMap.set(tempStr, hashMap.get(tempStr) + 1);
    }
    console.log(hashMap)

    for (let tempStr of secondSection) { 
        if (!hashMap.has(tempStr) || hashMap.has(tempStr) === 0) {
            answer = "NO";
            break;
        }
        hashMap.set(tempStr, hashMap.get(tempStr) - 1);
    }

    return answer;
}
let input = `AbaAeCe
baeeACA`.split('\n');

console.log(solution(input));