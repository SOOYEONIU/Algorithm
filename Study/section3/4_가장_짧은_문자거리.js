const solution = (tempStr) => { 
    let answer = [];
    let p = 0;
    const [t, s] = tempStr.split(' ');

    for (let i = 0; i < t.length; i++) { 
        if (t[i] === s) {
            p = 0;
            answer.push(p);
        } else { 
            p++;
            answer.push(p);
        }
    }

    for (let i = t.length - 1; i >= 0; i--) { 
        if (t[i] === s) {
            p = 0;
        } else { 
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }

    return answer.join(' ');
}
let input = 'teachermode e';

console.log(solution(input));