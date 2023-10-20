// 572. Subtree of Another Tree
// Difficulty: Easy
// Source: https://leetcode.com/problems/subtree-of-another-tree/
//
// Description:
// Given the roots of two binary trees `root` and `subRoot`, return `true` if there is a
// subtree of `root` with the same structure and node values of `subRoot` and `false`
// otherwise.
//
// A subtree of a binary tree `tree` is a tree that consists of a node in `tree` and all
// of this node's descendants. The tree `tree` could also be considered as a subtree of
// itself.

import isSameTree from "./sameTree";
import TreeNode from "./utils/TreeNode";

export default function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) return subRoot === null;
  return (
    isSameTree(root, subRoot) ||
    isSubtree(root?.left ?? null, subRoot) ||
    isSubtree(root?.right ?? null, subRoot)
  );
}
