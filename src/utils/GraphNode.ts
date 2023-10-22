export default class GraphNode {
  val: number;
  neighbors: GraphNode[];
  constructor(val?: number, neighbors?: GraphNode[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// Complexity: O(V + E) Time | O(V) Space
export function graphFromAdjList(adj: number[][]): GraphNode | null {
  if (adj.length === 0) return null;

  let nodes = new Array(adj.length + 1).fill(0).map((_, i) => new GraphNode(i));
  for (let i = 0; i < adj.length; i++) {
    nodes[i + 1].neighbors = adj[i].map((j) => nodes[j]);
  }

  return nodes[1];
}

export function toAdjList(graph: GraphNode | null): number[][] {
  if (graph === null) return [];

  let visited = new Set<number>();
  let adj: number[][] = [];

  let q = [graph];
  while (q.length > 0) {
    graph = q.shift()!;
    visited.add(graph.val);
    adj[graph.val] = graph.neighbors.map((n) => n.val);
    q.push(...graph.neighbors.filter((n) => !visited.has(n.val)));
  }

  return adj.slice(1);
}
