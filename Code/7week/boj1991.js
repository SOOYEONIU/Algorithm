const fs = require('fs');
let [N, ...input] = fs.readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(value => value.split(' '));
let n = Number(N[0]);

const tree = {};
for (let i = 0; i < input.length; i++) { 
    const [node, left, right] = input[i];
    tree[node] = [left, right];
}

//전위 순회(Pre-order)
let preOrderResult = "";
const recursivePreOrder = (node) => { 
    if (node == ".") return;
    const [left, right] = tree[node];
    //루트 노드를 방문
    preOrderResult += node;
    //왼쪽 서브 트리를 후위 순회
    recursivePreOrder(left);
    //오른쪽 서브 트리를 후위 순회
    recursivePreOrder(right);
}

//중위 순회(In-order)
let inOrderResult = "";
const recursiveInOrder = (node) => { 
    if (node == ".") return;
    const [left, right] = tree[node];
    recursiveInOrder(left);
    inOrderResult += node;
    recursiveInOrder(right);
}

//후위 순회(Post-order)
let postOrderResult = "";
const recursivePostOrder = (node) => { 
    if (node == ".") return;
    const [left, right] = tree[node];
    recursivePostOrder(left);
    recursivePostOrder(right);
    postOrderResult += node;
}

const main = () => { 
    recursivePreOrder('A');
    console.log(preOrderResult);
    recursiveInOrder('A');
    console.log(inOrderResult);
    recursivePostOrder('A');
    console.log(postOrderResult);
}
main();