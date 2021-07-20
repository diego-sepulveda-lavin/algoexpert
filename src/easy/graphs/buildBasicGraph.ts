const vertices = ["A", "B", "C", "D", "E"];

const edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

// findAdjacentNodes
function findAdjacentNodes(node: string): string[] {
  let adjacecentNodes: string[] = [];

  for (const edge of edges) {
    let searchedNodeIdx = edge.indexOf(node);

    if (searchedNodeIdx > -1) {
      searchedNodeIdx === 0 ? adjacecentNodes.push(edge[1]) : adjacecentNodes.push(edge[0]);
    }
  }
  return adjacecentNodes;
}

// isConnected
function isConnected(node1: string, node2: string): boolean {
  for (const edge of edges) {
    let areBothNodesInSubArray = edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;

    if (areBothNodesInSubArray) {
      return true;
    }
  }
  return false;
}

console.log(findAdjacentNodes("B"));
console.log(isConnected("A", "E"));
