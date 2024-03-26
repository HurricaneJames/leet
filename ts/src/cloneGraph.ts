// 133. Clone Graph
// Difficulty: Medium
// Source: https://leetcode.com/problems/clone-graph/
//
// Description:
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
// class Node {
//   public int val;
//   public List<Node> neighbors;
// }
//
// Clarifying Questions:
// * what do we do if the edges are not bidirectional (ie. the adj list is not symmetric)?
// * do we need to support disjoint graphs?
// * do we need to support self-loops?
// * do we need to support cycles?
// * do we need to support duplicate edges?
// * do we need to support duplicate nodes?
//
// Constraints:
// * The number of nodes in the graph is in the range [0, 100].
// * 1 <= Node.val <= 100
// * Node.val is unique for each node.
// * There are no repeated edges and no self-loops in the graph.
// * The Graph is connected and all nodes can be visited starting from the given node.

import Node from "./utils/GraphNode";

export default function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;

  const nodes: Node[] = [];
  const q = [node];
  while (q.length > 0) {
    const cur = q.shift()!;
    if (!nodes[cur.val]) nodes[cur.val] = new Node(cur.val);
    cur.neighbors.forEach((n) => {
      if (!nodes[n.val]) {
        nodes[n.val] = new Node(n.val);
        q.push(n);
      }
      nodes[cur.val].neighbors.push(nodes[n.val]);
    });
  }

  return nodes[1];
}
