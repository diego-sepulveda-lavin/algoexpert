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
class NodeNumber {
  value: number;
  left: NodeNumber | null;
  right: NodeNumber | null;

  constructor(value: number) {
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

    // traverse order should print a, b, d, e, c, f
*/

export function depthFirstTraverse(root: Node) {
  let stack = [root]; // init a stack with root node
  // iterate while stack has elements
  while (stack.length > 0) {
    let curr = stack.pop(); // remove last element from stack and store it in current variable
    console.log(curr?.value);
    if (curr?.right) {
      stack.push(curr.right); // if current has a right, push it to the top of stack
    }
    if (curr?.left) {
      stack.push(curr.left); // if current has a left, push it to the top of stack. In this case, left will be the next element to be called
    }
  }
}

// Time O(n)
// Space 0(n)
//depthFirstTraverse(a);

/* 
    Pre-order traversal (self, left, right)
          a
        /   \
       b     c
      / \    /
     d   e  f

*/

export function preOrder(root: Node) {
  // the tree is empty
  if (root === null) return;
  console.log(root.value); // print before the children
  preOrder(root.left!);
  preOrder(root.right!);
}

// Time O(n)
// Space 0(n)
//preOrder(a); // should print a, b, d, e, c, f

/* 
    Post-order traversal (left, right, self )
          a
        /   \
       b     c
      / \    /
     d   e  f

*/

export function postOrder(root: Node) {
  // the tree is empty
  if (root === null) return;
  postOrder(root.left!);
  postOrder(root.right!);
  console.log(root.value); // print after the children
}

// Time O(n)
// Space 0(n)
//postOrder(a); // should print d, e, b, f, c, a

/* 
    In-order traversal (left, self, right )
          a
        /   \
       b     c
      / \    /
     d   e  f

*/

export function inOrder(root: Node) {
  // the tree is empty
  if (root === null) return;
  inOrder(root.left!);
  console.log(root.value); // print between the children
  inOrder(root.right!);
}

// Time O(n)
// Space 0(n)
//inOrder(a); // should print d, b, e, a, c, f

const three = new NodeNumber(3);
const two = new NodeNumber(2);
const seven = new NodeNumber(7);
const four = new NodeNumber(4);
const minustwo = new NodeNumber(-2);
const five = new NodeNumber(5);

three.left = two;
three.right = seven;
two.left = four;
two.right = minustwo;
seven.left = five;

export function sumTree(root: NodeNumber): number {
  // the tree is empty
  if (root === null) return 0;
  return sumTree(root.left!) + root.value + sumTree(root.right!);
}

// Time O(n)
// Space 0(n)
console.log(sumTree(three)); // should print 19
