// 100. Same Tree
// Difficulty: Easy
// Source: https://leetcode.com/problems/same-tree/
//
// Description:
// Given the roots of two binary trees p and q, write a function to check if they are the
// same or not. Two binary trees are considered the same if they are structurally
// identical, and the nodes have the same value.

import TreeNode from "./utils/TreeNode";

export default function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  return (
    (!p && !q) ||
    (p?.val === q?.val &&
      isSameTree(p?.left ?? null, q?.left ?? null) &&
      isSameTree(p?.right ?? null, q?.right ?? null))
  );
}
