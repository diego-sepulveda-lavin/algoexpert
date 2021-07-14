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

export function branchSums(root: BinaryTree | null) {
  const sums: number[] = []; //init an empty array where branch sums are gonna be stored
  calculateBranchSums(root, 0, sums); //function to calculate each branch sum, init with root node, 0 and empty array
  return sums; // return array with branch sums
}

function calculateBranchSums(node: BinaryTree | null, runningSum: number, sums: number[]) {
  if (!node) return; // if recursion reaches a null node, just return
  const newRunningSum = runningSum + node.value; // for every recursion, sum the runningSum with current value and store it

  // if current node children are null, means we are on a leaf node, so push current newRunningSum to array
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums); // visit left node
  calculateBranchSums(node.right, newRunningSum, sums); // visit right node, this is a preOrder traverse mode
}

// Time: O(n)
// Space: O(n)
console.log(branchSums(tree));
