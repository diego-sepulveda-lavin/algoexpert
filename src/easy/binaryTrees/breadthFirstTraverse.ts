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

/* 
        2
      /   \
     3     6
    / \    /
   10 11 12
*/

const tree = new BinaryTree(2);
tree.insert([3, 6, 10, 11, 12]);

export function traverseTree(root: BinaryTree) {
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    if (current?.left) {
      queue.push(current.left);
    }
    if (current?.right) {
      queue.push(current.right);
    }
    console.log(current?.value);
  }
}
traverseTree(tree);
