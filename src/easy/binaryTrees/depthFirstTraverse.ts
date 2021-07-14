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

    // traverse order should print a, b, d, e, c, f
  */

export function depthFirstTraverse(root: Node) {
  let stack = [root];
  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr?.value);
    if (curr?.right) {
      stack.push(curr.right);
    }
    if (curr?.left) {
      stack.push(curr.left);
    }
  }
}
depthFirstTraverse(a);
