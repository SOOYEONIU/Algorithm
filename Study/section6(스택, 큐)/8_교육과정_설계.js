const solution = ([requiredSub, allSub]) => { 
    let queue = requiredSub.split('');
    let allArr = allSub.split('');

    for (let sub of allArr) { 
        if (queue[0] === sub) { 
            queue.shift();
        }
    }
    return queue.length ? 'NO' : 'YES';
}
let input = ['CBA', 'CADBGE'];
console.log(solution(input));