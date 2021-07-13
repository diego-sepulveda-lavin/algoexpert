class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;
    const newNode = new Node(value, prev.next);
    prev.next = newNode;
    this.length++;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();
    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;
    prev.next = prev.next.next;
    this.length--;
  }

  describe() {
    let current = this.head;
    let output = "";
    for (let i = 0; i < this.length; i++) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}${null}`);
    console.log(`Length: ${this.length}`);
  }
}

const ll = new LinkedList();

ll.insertAtHead(10);
// 10 -> null

ll.insertAtHead(44);
// 44 -> 10 -> null

ll.insertAtHead(56);
// 56 -> 44 -> 10 -> null

ll.insertAtIndex(1, 99);
// 56 -> 99 -> 44 -> 10 -> null

ll.removeAtIndex(0);
// 99 -> 44 -> 10 -> null

ll.removeAtIndex(1);
// 99 -> 10 -> null

ll.describe();

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
