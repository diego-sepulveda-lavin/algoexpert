/* 
    Largest Component
    Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
    The function should return the size of the largest connected component in the graph.

    Sample input:
    adjacencyList ={
        0: ['8', '1', '5'],
        1: ['0'],
        5: ['0', '8'],
        8: ['0', '5'],
        2: ['3', '4'],
        3: ['2', '4'],
        4: ['3', '2']
    }

    Sample Output:
    4 // due to the size of component 1-0-8-5 is bigger than 2-3-4
*/
interface AdjList {
  [node: string]: string[];
}

const adjacencyList = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

const largestComponent = (graph: AdjList): number => {
  const visited: Set<string> = new Set();
  let largestSize = 0;

  for (const node in graph) {
    if (!visited.has(node)) {
      const currSize = dfsSize(graph, node, visited);
      currSize > largestSize && (largestSize = currSize);
    }
  }
  return largestSize;
};

const dfsSize = (graph: AdjList, start: string, visited: Set<string>): number => {
  const stack = [start];
  visited.add(start);
  let size = 1;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current) {
      const neighbors = graph[current];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
          visited.add(neighbor);
          size++;
        }
      }
    }
  }
  return size;
};

console.log(largestComponent(adjacencyList));
