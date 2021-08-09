interface Graph {
  [key: string]: string[];
}

export const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPath = (graph: Graph, source: string, destination: string): boolean => {
  const stack = [source];
  while (stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode);
    if (currNode === destination) return true;
    if (currNode) {
      const neighbors = graph[currNode];
      for (const neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
  return false;
};

console.log(hasPath(graph, "j", "h"));
