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
  const visited: Set<string> = new Set();
  const queue: [string, number][] = [[start, 0]];
  visited.add(start);

  while (queue.length > 0) {
    const current = queue.shift();
    if (current) {
      const [node, distance] = current;
      if (node === end) return distance;
      const neighbors = graph[node];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }
  }
  return -1;
};

const edgesToAdjList = (edgesList: string[][]) => {
  const graph: AdjList = {};

  for (const edge of edgesList) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

console.log(shortestPath(edges, "w", "z"));
