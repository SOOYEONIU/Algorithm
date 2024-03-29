const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = input.shift();
let commandNum = Number(input.shift());

console.log(string)

let inputArray = input.map((command) => command.split(" "));

console.log(inputArray)

class Node { 
    constructor(data, next=null) { 
        this.data = data;
        this.next = next;
    }
}//Node

class Stack { 
    constructor() { 
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(data) {
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

    dequeue() {
        const deleteData = this.last;
        this.last.next = this.last;
        this.length--;
        return deleteData;
    }

    peek() { 
        return this.first.data;
    }

    size() { 
        return this.length;
    }
}//Stack

const stack1 = new Stack();
const stack2 = new Stack();

for (let i = 0; i < string.length; i++) { 
    stack2.enqueue(string[i]); // stack2에 모든 값 입력
}

inputArray.forEach((value) => {
    console.log(value[0]);

    switch (value[0]) { 
        case 'P': console.log('P지롱'); break;
        case 'L': console.log('L이지롱'); break;
        case 'B': console.log('B지롱'); break;
        case 'D': console.log('D지롱'); break;
    }
});
