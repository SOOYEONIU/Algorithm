const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
// console.log(input)

const n = +input.shift();//+input[0]; 도 가능
const tree = Array.from(Array(n + 1), () => []); // 트리 배열 생성
const parents = new Array(n + 1).fill(0); // parents 배열 생성

for (let [from, to] of input.map((edge) => edge.split(' ').map(Number))) { // 양방향 트리 만들기
    tree[from].push(to);
    tree[to].push(from);
}
//tree
`
[
  [],          [ 6, 4 ],
  [ 4 ],       [ 6, 5 ],
  [ 1, 2, 7 ], [ 3 ],
  [ 1, 3 ],    [ 4 ]
]
`

//BFS 알고리즘 활용
const queue = [];
parents[1] = 1;
for (let next of tree[1]) {
    // 1이 시작이고 child 노드를 넣고 parents[child]엔 부모노드의 값을 넣어준다.
    parents[next] = 1; 
    queue.push(next); // queue = [6, 4]
}
// queue에 값이 없을 때까지 반복 실행
while (queue.length) { // 2
    const cur = queue.shift(); // 6 4 -> 6 먼저 해보면,
    for (let next of tree[cur]) { // tree[6] => [1, 3]
        if (!parents[next]) { // 1과 3중 1은 이미 parents[1]이 1값이므로 3만 실행
            parents[next] = cur;// 부모 노드의 값을 넣어준다. => parents[3] = 6
            queue.push(next); //  [4, 3]
        }
    }
}

`
parents
[ 0, 1, 4, 6, 1, 3, 1, 4 ]
`
// 배열 2번부터 출력
console.log(parents.slice(2).join('\n'));