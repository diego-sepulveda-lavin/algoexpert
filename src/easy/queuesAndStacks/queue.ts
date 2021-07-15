class QueueNode {
  value: number | string;
  next: QueueNode | null;

  constructor(val: number | string) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {}
}
