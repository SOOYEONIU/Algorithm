class Node { 
    constructor(data) { 
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() { 
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.currentNode = undefined;
        this.length = 0;
    }

    size() { 
        return this.length;
    }

    append(data) { 
        let newNode = new Node(data);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    toString() { 
        // return 'hello world';
        let currentNode = this.head;
        currentNode = currentNode.next;

        let s = '';
        for (let i = 0; i < this.length; i++) { 
            s += `${currentNode.data}`
            currentNode = currentNode.next;
        }
        return s.slice(0, -1);
    }

    insert(index, data) { 
        let currentNode = this.head;
        currentNode = currentNode.next; // 처음 Node를 init으로 지정해줬기 때문에 다음 노드의 값을 대체

        for (let i = 0; i < index - 1; i++) { 
            currentNode = currentNode.next;
        }

        let newNode = new Node(data);

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    delete(index) { 
        let currentNode = this.head;
        currentNode = currentNode.next;

        for (let i = 0; i < index-1; i++) { 
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
        this.length--;
    }
}

let linkedlist = new LinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.insert(2, 5);
linkedlist.delete(2);
console.log(linkedlist.size());
console.log(linkedlist);
console.log(linkedlist.toString())
/*
LinkedList {
  head: Node { data: 'init', next: Node { data: 1, next: [Node] } },
  tail: Node { data: 30, next: null },
  currentNode: undefined,
  length: 6
}
*/