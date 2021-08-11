/* 
connected components count
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. 
The function should return the number of connected components within the graph.

Input: 
graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}
Output -> 3
*/
interface Graph {
  [node: string]: (string | number)[];
}
export const graph = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1],
};

const connectedComponentsCount = (graph: Graph) => {
  const visited: Set<string> = new Set();
  let count = 0;
  for (const node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};

const explore = (graph: Graph, current: string, visited: Set<string>) => {
  if (visited.has(current)) return false;

  visited.add(current);

  for (const neighbor of graph[current]) {
    explore(graph, String(neighbor), visited);
  }
  return true;
};

console.log(connectedComponentsCount(graph)); // 3
