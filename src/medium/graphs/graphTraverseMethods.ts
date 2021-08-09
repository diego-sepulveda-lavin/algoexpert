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

const depthFirstPrint = (graph: Graph, source: string) => {
  const stack = [source];

  while (stack.length > 0) {
    const currNode = stack.pop();
    console.log(currNode);
    if (currNode) {
      const neighbors = graph[currNode];
      for (const neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
};

const depthFirstRecPrint = (graph: Graph, source: string) => {
  console.log(source);
  const neighbors = graph[source];
  for (const neighbor of neighbors) {
    depthFirstRecPrint(graph, neighbor);
  }
};

const breadthFirstPrint = (graph: Graph, source: string) => {
  const queue = [source];

  while (queue.length > 0) {
    const currNode = queue.shift();
    console.log(currNode);
    if (currNode) {
      const neighbors = graph[currNode];
      for (const neighbor of neighbors) {
        queue.push(neighbor);
      }
    }
  }
};

//depthFirstPrint(graph, "a"); // acebdf
depthFirstRecPrint(graph, "a"); // abdfce
//breadthFirstPrint(graph, "a"); // abcdef
