/* 
    Undirected Path
    Write a function, "undirectedPath", that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
    The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

export const edges = [
  ["i", "j"],
  ["k", "i"],
  //["k", "j"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

/* 
{
  i: ["j", "k"],
  j: ["i"],
  k: ["i", "m", "l"],
  m: ["k"],
  l: ["k"],
  o: ["n"],
  n: ["o"],
} 
*/

// Implemented with DFS iteratively, could also be DFS recursively or BFS iteratively
const undirectedPath = (edges: string[][], nodeA: string, nodeB: string) => {
  const graph = buildGraph(edges);
  const stack = [nodeA];
  const visitedNodes = new Set();

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode === nodeB) return true;
    if (!visitedNodes.has(currentNode) && currentNode) {
      const neighbors = graph[currentNode];
      for (const neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
    visitedNodes.add(currentNode);
  }
  return false;
};

const buildGraph = (edges: string[][]) => {
  // note this builds an adjacencyList for undirected graph
  const adjacencyList: { [node: string]: string[] } = {};

  for (const edgePair of edges) {
    const [firstNode, secondNode] = edgePair;
    if (!(firstNode in adjacencyList)) adjacencyList[firstNode] = [];
    if (!(secondNode in adjacencyList)) adjacencyList[secondNode] = [];
    adjacencyList[firstNode].push(secondNode);
    adjacencyList[secondNode].push(firstNode);
  }

  return adjacencyList;
};

console.log(undirectedPath(edges, "i", "o")); // false
console.log(undirectedPath(edges, "j", "m")); // true
console.log(undirectedPath(edges, "o", "n")); // true
