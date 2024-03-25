const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

class Node { 
    constructor(data) { 
        this.data = data;
        this.next = null;
    }//constructor
}//Node

let lastData = '';

class Queue { 
    constructor() { 
        this.first = null;
        this.last = null;
        this.size = 0;
    }//constructor

    enqueue(data) { 
        const newNode = new Node(data);

        if (this.first) {
            this.last.next = newNode;
            this.last = newNode;
        } else { 
            this.first = newNode;
            this.last = newNode;
        }
        this.size++;
        lastData = data;
    }//enqueue
    
    dequeue() { 
        const deleteData = this.first;
        this.first = this.first.next;
        this.size--;

        return deleteData.data;
    }//dequeue
    
    peek() {
        return this.first.data;
    }//peek
    
    count() { 
        return this.size;
    }//count
}//Queue

let result = ''; // 출력값 
const queue = new Queue();

let i = 1;
while (i <= input[0]) {
    let inputData = [];
    inputData = input[i].split(' ');

    switch (inputData[0]) {
        case 'push':
            queue.enqueue(inputData[1]);
            break;
        case 'pop':
            result += ( queue.count() > 0 ? queue.dequeue() : -1 ) + "\n" ;
            break;
        case 'size':
            result += queue.count() + "\n";
            break;
        case 'empty':
            result += ( queue.count() == 0 ? 1 : 0) + "\n";
            break;
        case 'front':
            result += ( queue.count() == 0 ? -1 : queue.peek() ) + "\n";
            break;
        case 'back':
            result += (queue.count() > 0 ? lastData : -1) + "\n";
            break;
    }
    i++;
}// while 반복문

console.log(result);
