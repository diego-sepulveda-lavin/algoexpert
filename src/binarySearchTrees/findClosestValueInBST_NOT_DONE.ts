/* 

    Write a function that takes in a Binary Search Tree (BST) and a target integer
    value and returns the closest value to that target value contained in the BST.

    Each "BST" node has an integer "value", a
    "left" child node, and a "right" child node. A node is
    said to be a valid "BST" node if and only if it satisfies the BST
    property: its "value" is strictly greater than the values of every
    node to its left; its "value" is less than or equal to the values
    of every node to its right; and its children nodes are either valid
    "BST" nodes themselves or "None" / "null".

    Sample Input:

    tree =   
              10
           /     \
          5      15
        /   \   /   \
       2     5 13   22
     /           \
    1            14
    
    target = 12

    Sample Output: 13
*/

class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let bst = {
  nodes: [
    { id: "10", left: "5", right: "15", value: 10 },
    { id: "15", left: "13", right: "22", value: 15 },
    { id: "22", left: null, right: null, value: 22 },
    { id: "13", left: null, right: "14", value: 13 },
    { id: "14", left: null, right: null, value: 14 },
    { id: "5", left: "2", right: "5-2", value: 5 },
    { id: "5-2", left: null, right: null, value: 5 },
    { id: "2", left: "1", right: null, value: 2 },
    { id: "1", left: null, right: null, value: 1 },
  ],
  root: "10",
};

const target = 12;

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

export function findClosestValueInBst(tree: BST, target: number) {
  if (tree.left && tree.left.value < target) {
    console.log(tree.right);
  }
}

findClosestValueInBst(root, target);
