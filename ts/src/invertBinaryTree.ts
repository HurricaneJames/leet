// 226. Invert Binary Tree
// Difficulty: Easy
// Source: https://leetcode.com/problems/invert-binary-tree/
//
// Description:
// Given the `root` of a binary tree, invert the tree, and return its root.

import TreeNode from "./utils/TreeNode";

export default function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
}
