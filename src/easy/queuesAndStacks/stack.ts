class StackNode {
  value: number | string;
  next: StackNode | null;

  constructor(val: number | string) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  top: StackNode | null;
  height: number;

  constructor() {
    this.top = null;
    this.height = 0;
  }

  push(val: number | string) {
    if (this.height === 0) {
      this.top = new StackNode(val);
      this.height++;
      return;
    }
    let oldTop = this.top;
    this.top = new StackNode(val);
    this.top.next = oldTop;
    this.height++;
  }

  pop() {
    if (this.height === 0) return;

    let currTop = this.top;

    if (this.height === 1) {
      this.top = null;
      this.height--;
      return currTop?.value;
    }
    if (currTop?.next) {
      this.top = currTop.next;
      this.height--;
      return currTop?.value;
    }
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
}

let myStack = new Stack();
myStack.push(3);
myStack.push(4);
myStack.pop();
myStack.push(5);
myStack.push(6);

myStack.print();
