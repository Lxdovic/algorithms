export const depthFirstSearch = (
  graph: Record<string, string[]>,
  start: string,
  target: string,
) => {
  const stack = [start];
  const visited = [start];

  while (stack.length > 0) {
    const current = stack.pop() as string;

    if (current === target) return true;

    graph[current].forEach((neighbor: string) => {
      if (!visited.includes(neighbor)) {
        stack.push(neighbor);
        visited.push(neighbor);
      }
    });
  }

  return false;
};

const generateRandomGraph = (size: number, maxEdges: number) => {
  const graph: Record<string, string[]> = {};

  for (let i = 0; i < size; i++) {
    const node = i.toString();
    graph[node] = [];

    const numEdges = Math.floor(Math.random() * maxEdges) + 1;

    for (let j = 0; j < numEdges; j++) {
      let randomNode;

      do {
        randomNode = Math.floor(Math.random() * size).toString();
      } while (randomNode === node || graph[node].includes(randomNode));

      graph[node].push(randomNode);
    }
  }

  return graph;
};

export const test = () => {
  const graph = generateRandomGraph(40, 4);

  console.log("Graph:", graph);
  console.log("Starting search...");
  const start = performance.now();
  const found = depthFirstSearch(graph, "0", "3");

  console.log("Found:", found);
  console.log("Time:", performance.now() - start, "ms");
};
