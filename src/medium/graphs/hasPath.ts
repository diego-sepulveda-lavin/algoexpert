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

// Depth First
const hasPath = (graph: Graph, source: string, destination: string): boolean => {
  const stack = [source];
  while (stack.length > 0) {
    const currNode = stack.pop();
    //console.log(currNode);
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

// Depth First with recursive function
const hasPathRec = (graph: Graph, source: string, destination: string): boolean => {
  if (source === destination) return true;
  const neighbors = graph[source];
  for (const neighbor of neighbors) {
    if (hasPathRec(graph, neighbor, destination) === true) {
      return true;
    }
  }
  return false;
};

// Breadth First
const hasPathBFS = (graph: Graph, source: string, destination: string) => {
  const queue = [source];
  while (queue.length > 0) {
    const currNode = queue.shift();
    if (currNode === destination) return true;
    if (currNode) {
      const neighbors = graph[currNode];
      for (const neighbor of neighbors) {
        queue.push(neighbor);
      }
    }
  }
  return false;
};

console.log(hasPath(graph, "j", "h")); //true
console.log(hasPath(graph, "f", "k")); // true
console.log(hasPath(graph, "g", "k")); // false
console.log(hasPath(graph, "k", "f")); // false
console.log("----------------");
console.log(hasPathRec(graph, "j", "h")); //true
console.log(hasPathRec(graph, "f", "k")); // true
console.log(hasPathRec(graph, "g", "k")); // false
console.log(hasPathRec(graph, "k", "f")); // false
console.log("----------------");
console.log(hasPathBFS(graph, "j", "h")); //true
console.log(hasPathBFS(graph, "f", "k")); // true
console.log(hasPathBFS(graph, "g", "k")); // false
console.log(hasPathBFS(graph, "k", "f")); // false
