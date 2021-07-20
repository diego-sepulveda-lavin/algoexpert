interface IVisitedNodes {
  [name: string]: null | GraphNode;
}

interface IGraphNode {
  value: string;
  edgesList: GraphNode[];
  connect(node: GraphNode): void;
  getAdjacentNodes(): GraphNode[];
  isConnected(node: GraphNode): boolean;
}

interface IGraph {
  nodes: GraphNode[];
  addNode(node: GraphNode): void;
  reconstructPath(visitedNodes: IVisitedNodes, startNode: GraphNode, endNode: GraphNode): void;
  breadthFirstTraversal(start: GraphNode, end: GraphNode): void;
}

export class GraphNode implements IGraphNode {
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

export class Graph implements IGraph {
  nodes: GraphNode[];

  constructor(nodes: GraphNode[]) {
    this.nodes = [...nodes];
  }

  addNode(node: GraphNode): void {
    this.nodes.push(node);
  }

  reconstructPath(visitedNodes: IVisitedNodes, startNode: GraphNode, endNode: GraphNode): GraphNode[] {
    let currNode: GraphNode | null = endNode;
    const shortesPath: GraphNode[] = [];
    while (currNode !== null) {
      shortesPath.push(currNode);
      currNode = visitedNodes[currNode.value];
    }
    return shortesPath.reverse();
  }

  breadthFirstTraversal(start: GraphNode, end: GraphNode) {
    let queue = [start];
    let visitedNodes: IVisitedNodes = {};
    visitedNodes[start.value] = null;

    while (queue.length > 0) {
      let currentNode = queue.shift();

      if (currentNode?.value === end.value) {
        console.log("Found it");
        return this.reconstructPath(visitedNodes, start, end);
      }

      currentNode?.edgesList.forEach((edge) => {
        if (!visitedNodes.hasOwnProperty(edge.value)) {
          queue.push(edge);
          if (currentNode) {
            visitedNodes[edge.value] = currentNode;
          }
        }
      });
    }
  }
}

const hannah = new GraphNode("Hannah");
const mary = new GraphNode("Mary");
const mel = new GraphNode("Mel");
const max = new GraphNode("Max");
const dan = new GraphNode("Dan");
const nis = new GraphNode("Nis");
const nicolette = new GraphNode("Nicolette");
const chris = new GraphNode("Chris");
const yair = new GraphNode("Yair");
const mabel = new GraphNode("Mabel");
const liz = new GraphNode("Liz");

const graph = new Graph([hannah, mary, mel, max, dan, nis, nicolette, chris, yair, mabel, liz]);

hannah.connect(mary);
hannah.connect(nis);
hannah.connect(liz);
hannah.connect(max);
hannah.connect(mel);
mel.connect(max);
dan.connect(nis);
nis.connect(yair);
nis.connect(chris);
chris.connect(yair);
chris.connect(nicolette);
yair.connect(mabel);
yair.connect(liz);
mabel.connect(liz);

console.log(graph.breadthFirstTraversal(hannah, mabel));
