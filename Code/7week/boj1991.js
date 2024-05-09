const fs = require('fs');
let [N, ...input] = fs.readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(value => value.split(' '));
let n = Number(N[0]);

class TreeNode { 
    constructor(val) { 
        this.val = val;
        this.left = null;
        this.right = null;
    }
} // TreeNode

//전위 순회(Pre-order)
let preOrderResult = "";
const recursivePreOrder = (node) => { 
    if (node == null) return;
    //루트 노드를 방문
    preOrderResult += node.val;
    //왼쪽 서브 트리를 후위 순회
    recursivePreOrder(node.left);
    //오른쪽 서브 트리를 후위 순회
    recursivePreOrder(node.right);
}

//중위 순회(In-order)
let inOrderResult = "";
const recursiveInOrder = (node) => { 
    if (node == null) return;

    recursiveInOrder(node.left);
    inOrderResult += node.val;
    recursiveInOrder(node.right);
}

//후위 순회(Post-order)
let postOrderResult = "";
const recursivePostOrder = (node) => { 
    if (node == null) return;

    recursivePostOrder(node.left);
    recursivePostOrder(node.right);
    postOrderResult += node.val;
}

const main = () => { 
    // const root = new TreeNode('A');
    // root.left = new TreeNode('B');
    // root.left.left = new TreeNode('D');
    // root.right = new TreeNode('C');
    // root.right.left = new TreeNode('E');
    // root.right.right = new TreeNode('F');
    // root.right.right.right = new TreeNode('G');
    // console.log(root);
    const root = new TreeNode('A');
    for (let i = 0; i < input; i++) { 

    }

    recursivePreOrder(root);
    console.log(preOrderResult);
    recursiveInOrder(root);
    console.log(inOrderResult);
    recursivePostOrder(root);
    console.log(postOrderResult);
}
main();
