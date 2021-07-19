/* 
    BST Construction
    Write a "BST" class for a Binary Search Tree. The class should support:
    - Inserting values with the "insert" method.
    - Removing values with the "remove" method; this method should only remove the first instance of a given value
    - Searching for values with the "contains" method.

    Note that you can't remove values from a single-node tree. In other words, calling the "remove" method on a single-node
    tree should simply not do anything.

    Each "BST" node has an integer "value", a "left" child node, and a "right" child node. A node is said to be a valid "BST"
    node if and only if it satisfies the BST property: its "value" is sctrictly greater than the values of every node to its right; and
    its children nodes are either a valid "BST" nodes themselves or "None/Null".

    Sample Usage:

    // Assume the following BST has already been created:
              10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
       /          \
      1            14

    // All operations below are performed sequentially.
    insert(12):   
              10
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /        /  \
     1        12  14

    remove(10):   
              12
            /     \
           5      15
         /   \   /   \
        2     5 13   22
      /           \
     1            14

    contains(15): true

*/
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }

  /*   contains(value: number) {
    let queue = [this];
    while (queue.length > 0) {
      let curr = queue.shift();

      if (curr?.value === value) {
        return true;
      }

      if (curr?.left && value < curr.value) {
        queue.push(curr.left);
      }
      if (curr?.right && value >= curr.value) {
        queue.push(curr.right);
      }
    }
    return false;
  } */

  contains(value: number) {
    let curr: BST | null = this;
    while (curr != null) {
      if (curr.value === value) {
        return true;
      }

      if (value < curr.value && curr?.left) {
        curr = curr.left;
      } else if (value >= curr.value && curr?.right) {
        curr = curr.right;
      } else {
        curr = null;
      }
    }
    return false;
  }

  remove(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}

const bst = new BST(10);
bst.left = new BST(5);
bst.left.left = new BST(2);
bst.left.left.left = new BST(1);
bst.left.right = new BST(5);
bst.right = new BST(15);
bst.right.right = new BST(22);
bst.right.left = new BST(13);
bst.right.left.right = new BST(14);
console.log(bst.contains(14));
