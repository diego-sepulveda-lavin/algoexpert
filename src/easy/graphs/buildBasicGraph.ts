// Vertices and edges
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
  let adjacentNodes: string[] = [];

  for (const edge of edges) {
    let searchedNodeIdx = edge.indexOf(node);

    if (searchedNodeIdx > -1) {
      searchedNodeIdx === 0 ? adjacentNodes.push(edge[1]) : adjacentNodes.push(edge[0]);
    }
  }
  return adjacentNodes;
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

// Adjancency Matrix
const vertices2 = ["A", "B", "C", "D", "E"];

const verticesIdx: { [node: string]: number } = { A: 0, B: 1, C: 2, D: 3, E: 4 };

const adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

// findAdjacentNodes2
function findAdjacentNodes2(node: string): string[] {
  let adjacentNodes: string[] = [];
  let adjacencySubArray = adjacencyMatrix[verticesIdx[node]];

  for (let i = 0; i < adjacencySubArray.length; i++) {
    let currentNode = adjacencySubArray[i];
    currentNode === 1 && adjacentNodes.push(vertices2[i]);
  }

  return adjacentNodes;
}
// isConnected2
function isConnected2(node1: string, node2: string): boolean {
  let nodeIdx1 = verticesIdx[node1];
  let nodeIdx2 = verticesIdx[node2];

  let node1AdjacencyArr = adjacencyMatrix[nodeIdx1];

  let node2Status = node1AdjacencyArr[nodeIdx2];
  return node2Status === 1 ? true : false;
}

class GraphNode {
  value: string;
  edgesList: GraphNode[];

  constructor(val: string) {
    this.value = val;
    this.edgesList = [];
  }

  connect(node: GraphNode) {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  getAdjacentNodes() {
    return this.edgesList.map((edge) => edge.value);
  }

  isConnected(node: GraphNode) {
    return this.edgesList.some((edge) => edge === node);
  }
}

class Graph {
  nodes: GraphNode[];

  constructor(nodes: GraphNode[]) {
    this.nodes = [...nodes];
  }

  addNode(node: GraphNode) {
    this.nodes.push(node);
  }
}

const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
const nodeC = new GraphNode("C");
const nodeD = new GraphNode("D");

const nodeE = new GraphNode("E");

const graph = new Graph([nodeA, nodeB, nodeC, nodeD]);
graph.addNode(nodeE);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

//with EdgesList
console.log(findAdjacentNodes("A"));
console.log(isConnected("A", "E"));
//with adjacencyMatrix
console.log(findAdjacentNodes2("A"));
console.log(isConnected2("A", "E"));
// with adjacencyList and Classes
console.log(nodeA.getAdjacentNodes());
console.log(nodeA.isConnected(nodeE));
