class StackNode {
  value: number | string;
  next: StackNode | null;

  constructor(val: number | string) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  private top: StackNode | null;
  private height: number;

  constructor() {
    this.top = null;
    this.height = 0;
  }

  push(val: number | string) {
    let newNode = new StackNode(val);
    if (this.height === 0) {
      this.top = newNode;
    } else {
      let oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }
    this.height++;
  }

  pop() {
    if (this.height === 0) return null;

    let poppedNode = this.top;
    this.top = this.top!.next;
    this.height--;
    return poppedNode?.value;
  }

  print() {
    let curr = this.top;
    let stack = [];
    while (curr !== null) {
      stack.unshift(curr.value);
      curr = curr.next;
    }
    console.log(stack, "<-TOP");
  }

  getHeight() {
    return this.height;
  }

  getTop() {
    return this.top ? this.top.value : null;
  }
}

let myStack = new Stack();
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
let result = myStack.pop();

myStack.print();
