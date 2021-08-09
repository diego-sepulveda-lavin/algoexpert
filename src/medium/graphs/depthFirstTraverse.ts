interface Graph {
  [key: string]: string[];
}

export const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstTraverse = (graph: Graph, start: string) => {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode);
    if (currNode && !visited.has(currNode)) {
      const neighbors = graph[currNode];
      for (const neighbor of neighbors) {
        stack.push(neighbor);
      }
      visited.add(currNode);
    }
  }
};

depthFirstTraverse(graph, "a");
