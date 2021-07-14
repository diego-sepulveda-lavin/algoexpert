class Node {
  value: string;
  left: Node | null;
  right: Node | null;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/* 
        a
      /   \
     b     c
    / \    /
   d   e  f

   // traverse order should print a, b, c, d, e, f
*/

export function breadthFirstTraverse(root: Node) {
  let queue = [root]; // init queue with root node
  // iterate while the queue still has elementos
  while (queue.length > 0) {
    let current = queue.shift(); // remove first element in queue
    console.log(current?.value);
    if (current?.left) {
      queue.push(current.left); // if current element has a left child, push it to the queue
    }
    if (current?.right) {
      queue.push(current.right); // if current element has a right child, push it to the queue
    }
  }
}

// Time O(n)
// Space 0(n)
breadthFirstTraverse(a);
