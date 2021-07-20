export class GraphNode {
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
    return this.edgesList;
  }

  isConnected(node: GraphNode) {
    return this.edgesList.some((edge) => edge === node);
  }
}

export class Graph {
  nodes: GraphNode[];

  constructor(nodes: GraphNode[]) {
    this.nodes = [...nodes];
  }

  addNode(node: GraphNode) {
    this.nodes.push(node);
  }

  breadthFirstTraversal(start: GraphNode) {
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
}

const DFW = new GraphNode("DFW");
const JFK = new GraphNode("JFK");
const LAX = new GraphNode("LAX");
const HNL = new GraphNode("HNL");
const SAN = new GraphNode("SAN");
const EWR = new GraphNode("EWR");
const BOS = new GraphNode("BOS");
const MIA = new GraphNode("MIA");
const MCO = new GraphNode("MCO");
const PBI = new GraphNode("PBI");

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI]);

DFW.connect(LAX);
DFW.connect(JFK);
JFK.connect(BOS);
JFK.connect(MIA);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
MIA.connect(MCO);
MIA.connect(PBI);
MCO.connect(PBI);

// Time: O(v+e) where v is the number of vertices and e the number of edges
// Space: O(v)
graph.breadthFirstTraversal(SAN);
