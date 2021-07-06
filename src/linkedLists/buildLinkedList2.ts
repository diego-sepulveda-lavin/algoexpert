class LlNode {
  value: number;
  next: LlNode | null;
  constructor(value: number, next: LlNode | null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: LlNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value: number) {
    const newNode = new LlNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  removeHead() {
    if (this.head?.next) {
      this.head = this.head.next;
      this.length--;
    } else {
      this.head = null;
      this.length = 0;
    }
  }

  getByIndex(index: number) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current?.next !== undefined) {
        current = current?.next;
      }
    }
    return current;
  }
  insertAtIndex(index: number, value: number) {
    if (index === 0) return this.insertAtHead(value);
    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;
    const newNode = new LlNode(value, prev.next);
    prev.next = newNode;
    this.length++;
  }
  removeAtIndex(index: number) {
    if (index === 0) return this.removeHead();
    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;
    prev.next = prev.next?.next!;
    this.length--;
  }

  describe() {
    let current = this.head;
    let output = "";
    for (let i = 0; i <= this.length; i++) {
      if (current?.next !== undefined) {
        output = `${output}${current.value} -> `;
        current = current.next;
      } else {
        output = `${output}${null}`;
      }
    }
    console.log(output);
  }

  static fromValues(...values: number[]) {
    const ll = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i]);
    }
    return ll;
  }
}

const ll = new LinkedList();
// null
ll.insertAtHead(40);
ll.insertAtHead(30);
ll.insertAtHead(20);
ll.insertAtHead(10);
// 10 -> 20 -> 30 -> 40 -> null
ll.removeHead();
// 20 -> 30 -> 40 -> null

ll.insertAtIndex(1, 60);
// 20 -> 60 -> 30 -> 40 -> null
ll.insertAtIndex(0, 33);
// 33 -> 20 -> 60 -> 30 -> 40 -> null
ll.removeAtIndex(0);
// 20 -> 60 -> 30 -> 40 -> null
ll.removeAtIndex(3);
// 20 -> 60 -> 30 -> null
ll.removeAtIndex(2);
// 20 -> 60  -> null
ll.removeAtIndex(3);
// 20 -> 60  -> null
ll.describe();
