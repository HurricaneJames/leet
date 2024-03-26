// 102. Binary Tree Level Order Traversal
// Difficulty: Medium
// Source: https://leetcode.com/problems/binary-tree-level-order-traversal/
//
// Description:
// Given the `root` of a binary tree, return the level order traversal of its nodes'
// values. (i.e., from left to right, level by level).
//
// Clarifying Questions:

import TreeNode from "./utils/TreeNode";

export default function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  let queue: [number, TreeNode | null][] = [[0, root]];
  while (queue.length > 0) {
    let [level, node] = queue.shift()!;
    if (!node) continue;
    result[level] = result[level] || [];
    result[level].push(node.val);
    queue.push([level + 1, node.left], [level + 1, node.right]);
  }
  return result;
}
