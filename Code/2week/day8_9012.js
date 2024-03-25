const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = '';

class Node { 
    constructor(data) { 
        this.data = data;
        this.next = null;
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

        if (this.first) {
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

        return deleteData.data;
    }

    peek() { 
        if (this.length > 0) {
            return this.last.data;
        } else { return 0; }
    }

    count() { 
        return this.length;
    }
}//Stack

for (let j = 1; j <= input[0]; j++) {
    let stack = new Stack();
    let otherString = true;
    for (let i = 0; i < input[j].length; i++) {
        if (input[j].length < 2 || input[j].length > 50) {
            stack.enqueue(input[j][i]);
        } else {
            switch (input[j][i]) {
                case '(':
                    if (stack.count() > 0 && stack.peek() == ')') {
                        break;
                    } else {
                        stack.enqueue(input[j][i]);
                        break;
                    }
                case ')':
                    if (stack.count() > 0 && stack.peek() == '(') {
                        stack.dequeue();
                        break;
                    } else {
                        stack.enqueue(input[j][i]);
                        break;
                    }
                default:
                    otherString = false;
                    break;
            }
        }
    }
    result += (stack.count() == 0 && otherString ? 'YES' : 'NO') + "\n";
}

console.log(result);
