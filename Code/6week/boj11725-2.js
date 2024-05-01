const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
// console.log(input)

const n = +input.shift();//+input[0]; 도 가능
const tree = Array.from(Array(n + 1), () => []);
// console.log('tree', tree)

const parents = new Array(n + 1).fill(0);
console.log('parents', parents)

for (let [from, to] of input.map((edge) => edge.split(' ').map(Number))) {
    console.log('gg', from, to)
    tree[from].push(to);
    tree[to].push(from);
}
console.log('tree2', tree)

const queue = [];
parents[1] = 1;
for (let next of tree[1]) {
    console.log('next',next)
    // 1이 시작이고 child 노드를 넣고 parents[child]엔 부모노드의 값을 넣어준다.
    parents[next] = 1;
    queue.push(next);
}
while (queue.length) {
    const cur = queue.shift();
    for (let next of tree[cur]) {
        if (!parents[next]) {
            parents[next] = cur;// 부모 노드의 값을 넣어준다.
            queue.push(next);
        }
    }
}

console.log(parents.slice(2).join('\n'));