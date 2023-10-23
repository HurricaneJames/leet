// 178. Graph Valid Tree
// Difficulty: Medium
// Source: https://leetcode.com/problems/graph-valid-tree/
//
// Description:
// Given `n` nodes labeled from `0` to `n - 1` and a list of `undirected` edges (each edge
// is a pair of nodes), write a function to check whether these edges make up a valid
// tree.
//
// Clarifying Questions:
// * What if n is negative, or 0?
// * What is the max value for n?
// * What is the max number of edges?
// * Are we guaranteed that edges are unique?
// * Are we guaranteed that edges are valid (ie. they have a node that exists)?
//
// Constraints:
// * 0 <= n <= 10^5
// * 0 <= edges.length <= 10^5
// * edges[i].length == 2
// * 0 <= ai, bi < n
// * ai != bi
// * There are no repeated edges.
// * No two nodes have degree greater than 1.
// * There is no self-loops in the graph.
//
// Solution:
// DFS from any node, marking visited nodes as we go. If we ever visit a node that is
// already visited, return false. At the end, check if we visited every node. We can this
// with less time, by keeping a counter of visited nodes as we go.
//
// Complexity:
// O(V + E) time, O(V + E) space

export default function validTree(n: number, edges: number[][]): boolean {
  if (n === 0) return false;
  if (n === 1) return edges.length === 0;

  // O(V) time/space
  const visited = new Array(n).fill(false);
  let visitedCount = 0;

  // graph[node] = [adjacent nodes]
  // O(V) time/space
  const graph: number[][] = new Array(n).fill(0).map(() => []);
  // O(E) time / space
  edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  // (O(V + E) time, O(V) space
  function dfs(node: number, parent: number): boolean {
    if (visited[node]) return false;
    visited[node] = true;
    visitedCount++;
    for (const adj of graph[node]) {
      if (adj !== parent && !dfs(adj, node)) return false;
    }
    return true;
  }

  if (!dfs(0, 0)) return false;

  return visitedCount === n;
}
