const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let N = Number(fs.readFileSync(filePath).toString().trim());


class Node { 
    constructor(data){ 
        this.data = data;
        this.next = null;
    }
}//Node

class Queue {
    constructor() { 
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(data) { 
        const newNode = new Node(data);
        if (this.first != null) {
            this.last.next = newNode;
            this.last = newNode;
        } else { 
            this.first = newNode;
            this.last = newNode;
        }
        this.length++;
    }

    shift() { 
        const deleteData = this.first;
        if (this.length > 0) {
            this.first = this.first.next;
            this.length--;

            return deleteData.data;
        }
    }

    peek() { 
        return this.first.data;
    }

    size() { 
        return this.length;
    }
}//Queue

const cardBox = new Queue();

for (let i = 1; i <= N; i++){    
    cardBox.push(i);
}

let j = 0;
while (j < N) {
    cardBox.shift();
    if (cardBox.size() == 1) {
        console.log(cardBox.peek());
        break;
    }
    cardBox.push(cardBox.shift());
    j++;
}
