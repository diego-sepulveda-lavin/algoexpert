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

const connectedComponentsCount2 = (graph: Graph) => {
  const visited: Set<string> = new Set();
  let count = 0;

  for (const node in graph) {
    const stack = [node];
    if (!visited.has(node)) count++;
    while (stack.length > 0) {
      const current = stack.pop();
      if (current && !visited.has(current)) {
        const neighbors = graph[current];
        for (const neighbor of neighbors) {
          stack.push(String(neighbor));
        }
        visited.add(current);
      }
    }
  }
  return count;
};

//console.log(connectedComponentsCount(graph)); // 3
console.log(connectedComponentsCount2(graph)); // 3
