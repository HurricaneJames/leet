// 104. Maximum Depth of Binary Tree
// Difficulty: Easy
// Source: https://leetcode.com/problems/maximum-depth-of-binary-tree/
//
// Description:
// Given the `root` of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.

import TreeNode from "./utils/TreeNode";

export default function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
