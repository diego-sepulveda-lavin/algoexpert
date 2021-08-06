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

  setHead(node: Node) {
    // Write your code here.
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      if (node === this.tail) {
        this.tail = node.prev;
      }
      node.prev && (node.prev.next = node.next);
      node.next && (node.next!.prev = node.prev);
      node.prev = null;
      node.next = this.head;
      this.head && (this.head.prev = node);
      this.head = node;
    }
  }

  setTail(node: Node) {
    // Write your code here.
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else if (node === this.head) {
      this.head = node.next;
      this.head && (this.head.prev = null);
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.tail.next = null;
    } else {
      this.tail.next = node;
      node.next = null;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    // Write your code here.
    if (this.tail === nodeToInsert) {
      this.tail = nodeToInsert.prev;
    }
    if (node === this.head) {
      this.head = nodeToInsert;
    }

    nodeToInsert.prev && (nodeToInsert.prev.next = nodeToInsert.next);
    nodeToInsert.next && (nodeToInsert.next.prev = nodeToInsert.prev);
    nodeToInsert.prev = node.prev;
    node.prev && (node.prev.next = nodeToInsert);
    nodeToInsert.next = node;
    node.prev = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    // Write your code here.
    if (this.head === nodeToInsert) {
      this.head = nodeToInsert.next;
      this.head && (this.head.prev = null);
    }
    if (node === this.tail) {
      node.next = nodeToInsert;
      nodeToInsert.prev = node;
      this.tail = nodeToInsert;
    } else {
      node.next && (node.next.prev = nodeToInsert);
      nodeToInsert.next = node.next;
      node.next = nodeToInsert;
      nodeToInsert.prev = node;
    }
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    // Write your code here.
        if (this.head === null) {
          this.head = nodeToInsert;
          this.tail = nodeToInsert;
          return;
        }
    
        let currNode = this.head;
        let currPos = 1;
        while (currPos != position) {
          currNode = currNode.next!;
          currPos++;
        }
    
        if (position === 1) {
          nodeToInsert.prev && (nodeToInsert.prev.next = nodeToInsert.next);
          nodeToInsert.next && (nodeToInsert.next.prev = nodeToInsert.prev);
          currNode.prev = nodeToInsert;
          nodeToInsert.next = currNode;
          nodeToInsert.prev = null;
          this.head = nodeToInsert;
        } else if (nodeToInsert === this.head) {
          this.head = nodeToInsert.next;
          this.head && (this.head.prev = null);
          currNode.prev && (currNode.prev.next = nodeToInsert);
          nodeToInsert.prev = currNode.prev;
          nodeToInsert.next = currNode;
          currNode.prev = nodeToInsert;
          return;
        } else {
          this.insertBefore(currNode!, nodeToInsert);
        }
      }

  removeNodesWithValue(value: number) {
    // Write your code here.
    let currNode = this.head;
    while (currNode != null) {
      if (currNode.value === value) {
        if (currNode === this.head && currNode === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currNode === this.head) {
          this.head = currNode.next;
          this.head && (this.head.prev = null);
        } else if (currNode === this.tail) {
          this.tail = currNode.prev;
          this.tail && (this.tail.next = null);
        } else {
          currNode.prev && (currNode.prev.next = currNode.next);
          currNode.next && (currNode.next.prev = currNode.prev);
        }
      }
      currNode = currNode.next;
    }
  }

  remove(node: Node) {
    // Write your code here.
    if (this.head === node) {
      this.head = node.next;
    }
    if (this.tail === node) {
      this.tail = node.prev;
    }
    node.prev && (node.prev.next = node.next);
    node.next && (node.next.prev = node.prev);
    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value: number): boolean {
    // Write your code here.
    let currNode = this.head;
    while (currNode != null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  }

  describe(): void {
    let currNode = this.head;
    let output: number[] = [];
    while (currNode != null) {
      output.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(output.join(" <-> "));
  }

  bindNodes(nodeOne: Node, nodeTwo: Node): void {
    nodeOne.next = nodeTwo;
    nodeTwo.prev = nodeOne;
  }
}

// Create initial nodes
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

// Create stand-alone Nodes
let three2 = new Node(3);
let three3 = new Node(3);
let six = new Node(6);
let seven = new Node(7);

// Init Double Linked List
let myLinkedList = new DoublyLinkedList();

/* // Bind Initial Nodes
myLinkedList.bindNodes(one, two);
myLinkedList.bindNodes(two, three);
myLinkedList.bindNodes(three, four);
myLinkedList.bindNodes(four, five);

// Set Head and Tail
myLinkedList.head = one;
myLinkedList.tail = five;

myLinkedList.describe();
myLinkedList.setHead(four);
myLinkedList.describe();
myLinkedList.setTail(six);
myLinkedList.describe();
myLinkedList.insertBefore(six, three);
myLinkedList.describe();
myLinkedList.insertAfter(six, three2);
myLinkedList.describe();
myLinkedList.insertAtPosition(1, three3);
myLinkedList.describe();
myLinkedList.removeNodesWithValue(3);
myLinkedList.describe();
myLinkedList.remove(two);
myLinkedList.describe();
myLinkedList.containsNodeWithValue(5); */

myLinkedList.setHead(one);
myLinkedList.describe();
myLinkedList.insertAfter(one, two);
myLinkedList.describe();
myLinkedList.insertAfter(two, three);
myLinkedList.describe();
myLinkedList.insertAfter(three, four);
myLinkedList.describe();
myLinkedList.insertAfter(four, five);
myLinkedList.describe();
myLinkedList.insertAfter(five, six);
myLinkedList.describe();
myLinkedList.insertAfter(six, seven);
myLinkedList.describe();
myLinkedList.insertAtPosition(7, one);
myLinkedList.describe();
myLinkedList.insertAtPosition(1, one);
myLinkedList.describe(); // 1 2 3 4 5 9 7
myLinkedList.insertAtPosition(2, one); // 2 1 3 4 5 6 7
myLinkedList.describe();
