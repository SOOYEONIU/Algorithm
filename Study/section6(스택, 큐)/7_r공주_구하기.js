const solution = ([princeNum, removeNum]) => { 
    let queue = [];
    for (let i = 1; i <= princeNum; i++) { 
        queue.push(i);
    }
    while (queue.length) { 
        for (let i = 0; i < removeNum - 1; i++) { 
            queue.push(queue.shift());
        };
        queue.shift();

        if (queue.length === 1) { 
            return queue[0];
        }
    }
}

let input = [8, 3]; 
console.log(solution(input));