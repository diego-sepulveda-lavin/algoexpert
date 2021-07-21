export class GraphNode {
  value: string;
  edgesList: GraphNode[];

  constructor(val: string) {
    this.value = val;
    this.edgesList = [];
  }

  connect(node: GraphNode): void {
    this.edgesList.push(node);
    node.edgesList.push(this);
  }

  getAdjacentNodes(): GraphNode[] {
    return this.edgesList;
  }

  isConnected(node: GraphNode): boolean {
    return this.edgesList.some((edge) => edge === node);
  }
}

export class Graph {
  nodes: GraphNode[];

  constructor(nodes: GraphNode[]) {
    this.nodes = [...nodes];
  }

  addNode(node: GraphNode): void {
    this.nodes.push(node);
  }

  breadthFirstTraversal(start: GraphNode): void {
    let queue = [start];
    let visitedNodes = new Set();
    visitedNodes.add(start);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode?.value);

      currentNode?.edgesList.forEach((edge) => {
        if (!visitedNodes.has(edge)) {
          queue.push(edge);
          visitedNodes.add(edge);
        }
      });
    }
  }

  depthFirstTraversal(start: GraphNode, visited = new Set()): void {
    //keep traversing deeply until you hit a leaf node or end node

    console.log(start.value);

    visited.add(start);
    for (const edge of start.edgesList) {
      if (!visited.has(edge)) {
        this.depthFirstTraversal(edge, visited);
      }
    }
  }
}

const DFW = new GraphNode("DFW");
const JFK = new GraphNode("JFK");
const LAX = new GraphNode("LAX");
const HNL = new GraphNode("HNL");
const SAN = new GraphNode("SAN");
const HKG = new GraphNode("HKG");
const EWR = new GraphNode("EWR");
const BOS = new GraphNode("BOS");
const MIA = new GraphNode("MIA");
const MCO = new GraphNode("MCO");
const PBI = new GraphNode("PBI");

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, HKG, EWR, BOS, MIA, MCO, PBI]);

DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
SAN.connect(HKG);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MIA.connect(PBI);
MCO.connect(PBI);

// Time: O(v+e) where v is the number of vertices and e the number of edges
// Space: O(v)
console.log("breadthFirstTraversal");
graph.breadthFirstTraversal(DFW);

// Time: O(v+e) where v is the number of vertices and e the number of edges
// Space: O(v)
console.log("depthFirstTraversal");
graph.depthFirstTraversal(DFW);
