/* 
  Find Closest Value in BST

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
            10(2)
           /     \
        5(7)      15(-3)
        /   \     /      \
    2(10)  5(7) 13(-1)   22(-10)
     /           \
  1(11)           14(-2)
    
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

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

const target = 12;

export function findClosestValueInBst(tree: BST | null, target: number) {
  let targetsClosestNode;
  let distToClosestNode = Infinity;
  let currentNode = tree;

  while (currentNode !== null) {
    let distToCurrNode = Math.abs(target - currentNode.value);

    if (distToCurrNode < distToClosestNode) {
      targetsClosestNode = currentNode;
      distToClosestNode = distToCurrNode;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return targetsClosestNode?.value;
}

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
console.log(findClosestValueInBst(root, target));
