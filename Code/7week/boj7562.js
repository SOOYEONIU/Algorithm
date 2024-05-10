const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const testCase = Number(input.shift());

let distraction = [[-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2]];

const bfs = (box, [sx, sy]) => {
    for (let i = 0; i < distraction.length; i++) {
        let nx = sx + distraction[i][0]; 
        let ny = sy + distraction[i][1];

        if (nx >= 0 && nx < box.length && ny >= 0 && ny < box.length && box[nx][ny] === 0) { 
            box[nx][ny] = 1;
        }
    }
    // console.log(box)
}

const main = () => {
    const arr = [];
    for (let i = 0; i < input.length; i += 3) { 
        arr.push(input.slice(i, i + 3));
    }
    let testArr = arr.map(value => value.map(item => item.split(' ').map(Number)));


}
main();
