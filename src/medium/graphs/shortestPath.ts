/* 
    shortest path
    Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). 
    The function should return the length of the shortest path between A and B. 
    Consider the length as the number of edges in the path, not the number of nodes.
    If there is no path between A and B, then return -1.

    Sample Input:
    const edges = [
        ['w', 'x'],
        ['x', 'y'],
        ['z', 'y'],
        ['z', 'v'],
        ['w', 'v']
    ]

    Sample Output:
    shortestPath(edges, 'w', 'z'); // -> 2

*/

interface AdjList {
  [node: string]: string[];
}

export const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

const shortestPath = (edgesList: string[][], start: string, end: string) => {
  const graph = edgesToAdjList(edgesList);
  let hasPath = bfs(graph, start, end);
  return hasPath;
};

const bfs = (graph: AdjList, start: string, end: string) => {
  const visited: Set<string> = new Set();
  const queue = [start];
  let hasPath = false;
  visited.add(start);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      console.log(current);

      if (current === end) hasPath = true;
      const neighbors = graph[current];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  return hasPath;
};

const edgesToAdjList = (edgesList: string[][]) => {
  const adjacencyList: AdjList = {};

  for (const edge of edgesList) {
    const [a, b] = edge;
    if (!(a in adjacencyList)) adjacencyList[a] = [];
    if (!(b in adjacencyList)) adjacencyList[b] = [];
    adjacencyList[a].push(b);
    adjacencyList[b].push(a);
  }
  return adjacencyList;
};

console.log(shortestPath(edges, "w", "z"));
