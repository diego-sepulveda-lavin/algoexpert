/* 
    Implement a basic Single Linked List for number or strings
*/

class LinkedListNode {
  value: number | string;
  next: LinkedListNode | null;

  constructor(val: number | string) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  head: LinkedListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertHead(value: number | string) {
    let newNode = new LinkedListNode(value);
    this.length++;

    if (this.length === 0) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  removeHead() {
    if (this.length === 0) return;
    let removed = this.head?.value;
    this.head = this.head!.next;
    this.length--;
    return removed;
  }

  append(value: number | string) {
    if (this.length === 0) {
      this.length++;
      this.head = new LinkedListNode(value);
      return;
    }
    let curr = this.head;
    while (curr?.next !== null) {
      curr = curr!.next;
    }
    this.length++;
    curr.next = new LinkedListNode(value);
  }

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.length--;
      this.head = null;
      return;
    }

    let curr = this.head;
    while (curr!.next!.next != null) {
      curr = curr!.next;
    }
    this.length--;
    curr!.next = null;
  }

  print() {
    if (this.length === 0) {
      console.log(null);
      return;
    }
    let curr = this.head;
    let output = [];
    while (curr) {
      output.push(curr.value);
      curr = curr.next;
    }
    console.log(output.join(" -> "));
  }
}

let myLinkedList = new LinkedList();

myLinkedList.insertHead("a");
myLinkedList.insertHead("b");
myLinkedList.insertHead(1);
myLinkedList.removeHead()
myLinkedList.append("c");
myLinkedList.print();


myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();
myLinkedList.pop();

myLinkedList.print();
