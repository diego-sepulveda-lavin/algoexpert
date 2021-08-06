/* 
    Linked List Construction

    Write a "DoublyLinkedList" class that has a "head" and a "tail", both of which point to either a linked list "Node" or 
    "None / null". The class should support:
    
    - Setting the head and tail of the linked list.
    - Inserting nodes before and after other nodes as well as at given positions (the position of the head node is 1).
    - Removing given nodes and removing nodes with given values.
    - Searching for nodes with given values.

    Note that the "setHead", "setTail","insertBefore", "insertAfter", "insertAtPosition", and "remove" methods all take in
    actual "Node"s as input parameters—not integers (except for "insertAtPosition", which also takes in an integer representing the
    position); this means that you don't need to create any new "Node"s in these methods. 
    The input nodes can be either stand-alone nodes or nodes that are already in the linked list. If they're nodes that are 
    already in the linked list, the methods will effectively be "moving" the nodes within the linked list. 
    You won't be told if the input nodes are already in the linked list, so your code will have to defensively handle this scenario.

    If you're doing this problem in an untyped language like Python or JavaScript, you may want to look at the various 
    function signatures in a typed language like Java or TypeScript to get a better idea of what each input parameter is.

    Each "Node" has an integer "value" as well as a "prev" node and a "next" node, both of which can point to either another 
    node or "None" / "null".

    Sample Usage:

    // Assume the following linked list has already been created:
    1 <-> 2 <-> 3 <-> 4 <-> 5

    // Assume that we also have the following stand-alone nodes:
    3, 3, 6

    setHead(4): 4 <-> 1 <-> 2 <-> 3 <-> 5 // set the existing node with value 4 as the head
    setTail(6): 4 <-> 1 <-> 2 <-> 3 <-> 5 <-> 6 // set the stand-alone node with value 6 as the tail
    insertBefore(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 // move the existing node with value 3 before the existing node with value 6
    insertAfter(6, 3): 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a stand-alone node with value 3 after the existing node with value 6
    insertAtPosition(1, 3): 3 <-> 4 <-> 1 <-> 2 <-> 5 <-> 3 <-> 6 <-> 3 // insert a stand-alone node with value 3 in position 1
    removeNodesWithValue(3): 4 <-> 1 <-> 2 <-> 5 <-> 6 // remove all nodes with value 3
    remove(2): 4 <-> 1 <-> 5 <-> 6 // remove the existing node with value 2
    containsNodeWithValue(5): true
*/

// This is an input class. Do not edit.
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) Time | O(1) Space
  setHead(node: Node): void {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  // O(1) Time | O(1) Space
  setTail(node: Node): void {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1) Time | O(1) Space
  insertBefore(node: Node, nodeToInsert: Node): void {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1) Time | O(1) Space
  insertAfter(node: Node, nodeToInsert: Node): void {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // O(p) Time | O(1) Space
  insertAtPosition(position: number, nodeToInsert: Node): void {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currNode = this.head;
    let currPos = 1;
    while (currPos != position && currNode != null) {
      currNode = currNode.next;
      currPos++;
    }
    if (currNode) {
      this.insertBefore(currNode, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  // O(n) Time | O(1) Space
  removeNodesWithValue(value: number): void {
    let currNode = this.head;
    while (currNode != null) {
      let nodeToRemove = currNode;
      currNode = currNode.next;
      if (nodeToRemove.value === value) this.remove(nodeToRemove);
    }
  }

  // O(1) Time | O(1) Space
  remove(node: Node): void {
    if (node == this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    this.removeNodeBindings(node);
  }

  // O(1) Time | O(1) Space
  removeNodeBindings(node: Node): void {
    node.prev && (node.prev.next = node.next);
    node.next && (node.next.prev = node.prev);
    node.prev = null;
    node.next = null;
  }

  // O(n) Time | O(1) Space
  containsNodeWithValue(value: number): boolean {
    let currNode = this.head;
    while (currNode != null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }

  // O(n) Time | O(n) Space
  describe(): void | null {
    let currNode = this.head;
    let output: number[] = [];
    while (currNode != null) {
      output.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(output.join(" <-> "));
  }
}

// Create initial nodes
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let three2 = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);

// Init Double Linked List
let myLinkedList = new DoublyLinkedList();
one.next = two;
two.prev = one;
two.next = three;
three.prev = two;
three.next = four;
four.prev = three;
four.next = three2;
three2.prev = four;

myLinkedList.head = one;
myLinkedList.tail = three2;

myLinkedList.describe();
myLinkedList.insertAtPosition(2, three2);
myLinkedList.describe();
