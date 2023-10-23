// 323. Number of Connected Components in an Undirected Graph
// Difficulty: Medium
// Source: https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
//
// Description:
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a
// pair of nodes), write a function to find the number of connected components in an
// undirected graph.
//
// Clarifying Questions:
//
// Constraints:
// * 0 <= n <= 5000
// * 0 <= edges.length <= 20000
// * edges[i].length == 2
// * 0 <= ai <= bi < n
// * ai != bi
// * There are no repeated edges.
//
// Solution:
// We will use a simple breadth first traversal, marking every node we visit as visited
// with a component "id". We will then return the number of unique component ids.
//
// Complexity:
// n = number of nodes
// m = number of edges
// O(n + m) time / O(n) space

export default function countComponents(n: number, edges: number[][]): number {
  const NOT_VISITED = -1;

  // O(n) space/time
  const componentId: number[] = new Array(n).fill(NOT_VISITED);

  // O(n) space/time
  // we can avoid this memory with slower lookups on edges
  const graph = new Array(n).fill(0).map(() => new Array<number>());

  // O(m) space/time
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });
  let componentCount = 0;

  // O(n + m) time / O(n) space
  // O(n + m) becuase we walk the graph, potentially visiting every node and edge. However,
  // we do not continue if a node was already visited, so we do not multiple the complexity.
  function bfs(node: number) {
    const q = [node];
    const id = componentId[node];
    while (q.length > 0) {
      const node = q.shift()!;
      for (let child of graph[node]) {
        if (componentId[child] === NOT_VISITED) {
          componentId[child] = id;
          q.push(child);
        }
      }
    }
  }

  // O(n + n + m) => O(n + m) time / O(n) space
  for (let i = 0; i < n; i++) {
    if (componentId[i] === NOT_VISITED) {
      componentId[i] = componentCount++;
      bfs(i);
    }
  }

  return componentCount;
}
