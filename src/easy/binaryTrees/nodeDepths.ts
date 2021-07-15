/* 
    Node Depths
    The distance between a node in a Binary Tree and the tree's root is called the node's depth
    Write a function that takes in a Binart Tree and returns the sum of its nodes' depths.

    Each "BinaryTree" node has an integer "value", a "left" child node, and a "right" child node. Children nodes can either
    be "BinaryTree" nodes themselves or "None/Null"

    Sample Input:
    tree = 
               1
            /     \
          2        3
         /  \     /  \
        4     5  6    7
       / \ 
      8   9

    Sample Output:
    1 + 1 + 2 + 2 + 2 + 2 + 3 + 3 = 16
    16

    // The depth of the node with value 2 is 1.  
    // The depth of the node with value 3 is 1.  
    // The depth of the node with value 4 is 2.  
    // The depth of the node with value 5 is 2.  
    // Etc..  
    // Summing all of these depths yileds 16.      
 */

// This is the class of the input binary tree.
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.left.left = new BinaryTree(4);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.left.right = new BinaryTree(5);
root.right = new BinaryTree(3);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

export function nodeDepths(root: BinaryTree): number {
  let result: number[] = []; // init empty array
  sumDepths(root, 0, result); // call function with root, init sum and empty resul array
  return result.reduce((acc, curr) => acc + curr); // reduce result array to sum all numbers
}

export function sumDepths(root: BinaryTree | null, depth: number, result: number[]) {
  if (!root) return; // if root is null then return
  result.push(depth); // push to array the current depth
  sumDepths(root.left, depth + 1, result); // go to left and increase depth
  sumDepths(root.right, depth + 1, result); // go to rigth and increase depth
}

export function nodeDepthsImproved(root: BinaryTree | null, depth: number = 0): number {
  if (!root) return 0; // if root is null return 0
  // explore left node and increase depth, add current depth, explore right node
  return nodeDepthsImproved(root.left, depth + 1) + depth + nodeDepthsImproved(root.right, depth + 1);
}

console.log(nodeDepths(root));

// When tree is balanced
// O(n) time | O(h) space where n is the number of nodes in the binary tree and h is the height of the tree
console.log(nodeDepthsImproved(root));
