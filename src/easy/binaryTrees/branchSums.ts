/* 
    Write a function that takes in a binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost
    branch sum.

    A branch sum is the sum of all the values in a Binary tree branch. A Binary Tree branch is a path of nodes in a tree that starts
    at the root node and ends at any leaf node.

    Each "BinaryTree" node has an integer "value", a "left" child node, and a "right" child node. Children nodes can either be "BinaryTree"
    nodes themselves or "None/Null"

    Sample Input:
    tree = 
               1
            /     \
          2        3
         /  \     /  \
        4     5  6    7
       / \   /
      8   9 10

    Sample Output:
    [15, 16, 18, 10, 11]

    // 15 == 1 + 2 + 4 + 8
    // 16 == 1 + 2 + 4 + 9
    // 18 == 1 + 3 + 5 + 10
    // 10 == 1 + 3 + 6
    // 11 == 1 + 3 + 7  

*/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values: number[], i = 0) {
    if (i >= values.length) return;
    const queue: BinaryTree[] = [this];
    while (queue.length > 0) {
      let current = queue.shift()!;
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

const tree = new BinaryTree(1);
tree.insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);

/* export function branchSums(root: BinaryTree): number[] {
  let currentNode: BinaryTree | null = root;
  let stopNode: BinaryTree | null = root;

  while (currentNode != null) {
    if (currentNode.left) {
      currentNode = currentNode.left;
    } else {
      if (currentNode.left === stopNode.value) {
        currentNode = currentNode.right;
      }
      stopNode = currentNode;
      currentNode = root;
    }
    console.log("currentNodeValue:", currentNode?.value, stopNode.value);
  }
} */
