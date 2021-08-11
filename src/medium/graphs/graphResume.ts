// Usually graphs can be declared with edgesList, adjacencyList or adjacencyMatrix

// Declares de edges of a graph, where "a" node connects with "b" node
export const edgesList = [
  ["a", "b"],
  ["a", "c"],
  ["c", "d"],
];

// Declares all the nodes and its adjacent nodes
export const adjacencyList = {
  a: ["b", "c"],
  b: ["a"],
  c: ["a", "d"],
  d: ["c"],
};

// Declares connections, where the row and col corresponds to an node or vertice
const verticesIdx = { a: 0, b: 1, c: 2, d: 3 };
export const adjacencyMatrix = [
  // a  b  c  d
  [0, 1, 1, 0], // a
  [1, 0, 0, 0], // b
  [1, 0, 0, 1], // c
  [0, 0, 1, 0], // d
];

// This function allows us to transform and edgesList to an adjacencyList (undirected graph)
const edgesToAdjacenyList = (edges: string[][]) => {
  const adjacencyList: { [node: string]: string[] } = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in adjacencyList)) adjacencyList[a] = [];
    if (!(b in adjacencyList)) adjacencyList[b] = [];
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }
  return adjacencyList;
};

// BFS Iteratively with adjacencyList
interface AdjancencyList {
  [node: string]: string[];
}

// if BFS used on an undirected graph, it may result in an infinite loop. We can use a set to store visited nodes
const BFS = (graph: AdjancencyList, start: string) => {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (!visited.has(current)) {
      visited.add(current);
      console.log(current);
      if (current) {
        const neighbors = graph[current];
        for (const neighbor of neighbors) {
          queue.push(neighbor);
        }
      }
    }
  }
};

const DFS = (graph: AdjancencyList, start: string) => {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const current = stack.pop();
    if (!visited.has(current)) {
      visited.add(current);
      console.log(current);
      if (current) {
        const neighbors = graph[current];
        for (const neighbor of neighbors) {
          stack.push(neighbor);
        }
      }
    }
  }
};

//console.log(edgesToAdjacenyList(edgesList));
//BFS(adjacencyList, "a"); // abcd
DFS(adjacencyList, "a"); // acdb
