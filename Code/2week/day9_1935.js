const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : __dirname + '/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class Stack { 
    constructor() {
        this.stackArray = [];
        this.length = 0;
    }//constructor

    enqueue(data) { 
        this.stackArray.push(data);
        this.length++;
    }//enqueue

    dequeue() { 
        this.length--;
        return this.stackArray.pop();
    }//dequeue

    peek() { 
        if (this.length > 0) {
            return this.stackArray[this.length - 1];
        } else { 
            return 'Error!! Array 길이 = 0';
        }
    }//peek()

    size() { 
        return this.length;
    }//size
}//Stack
