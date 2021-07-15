class QueueNode {
  value: number | string;
  next: QueueNode | null;

  constructor(val: number | string) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  private front: QueueNode | null;
  private back: QueueNode | null;
  private length: number;

  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val: number | string) {
    const newNode = new QueueNode(val);
    if (this.length === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back!.next = newNode;
      this.back = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.back = null;
    }

    const removedNode = this.front;
    this.front = this.front!.next;
    this.length--;
    return removedNode?.value;
  }

  getLength() {
    return this.length;
  }

  getFront() {
    return this.front?.value;
  }
  getBack() {
    return this.back?.value;
  }
}

let myQueue = new Queue();
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
console.log(myQueue.getFront());
console.log(myQueue.getBack());
