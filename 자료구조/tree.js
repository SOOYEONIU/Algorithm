class Node {
    constructor(data) { 
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree { 
    constructor(data) { 
        let init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    insert(data) {
        let newNode = new Node(data);
        let currentNode = this.root;

        while (currentNode) { 
            if (data === currentNode.data) { 
                return;
            }
            if (data < currentNode.data) { 
                if (!currentNode.left) { 
                    currentNode.left = newNode;
                    this.length++;
                    return;
                }
                currentNode = currentNode.left;
            }
            if (data > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    this.length++;
                    return;
                }
                currentNode = currentNode.right;
            } 
        }
    }

    DFS() { 
        let result = [];
        let stack = [this.root];

        while (stack.length !== 0) {
            let current = stack.pop();
            if (current.right) {
                stack.push(current.right);
            }
            if (current.left) {
                stack.push(current.left);
            }
            result.push(current.data);
        }

        return result;
    }

    BFS() {
        let result = [];
        let queue = [this.root];

        while (queue.length !== 0) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            result.push(current.data);
        }

        return result;
    }
}

let tree = new Tree(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);
console.log(tree.DFS());
console.log(tree.BFS());