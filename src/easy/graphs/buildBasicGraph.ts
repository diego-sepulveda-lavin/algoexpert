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
function findAdjacentNodes(node: string) {
  let adjacecentNodes: string[] = [];

  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let searchedNodeIdx = edge.indexOf(node);

    if (searchedNodeIdx > -1) {
      searchedNodeIdx === 0 ? adjacecentNodes.push(edge[1]) : adjacecentNodes.push(edge[0]);
    }
  }
  return adjacecentNodes;
}

// isConnected
console.log(findAdjacentNodes("B"));
