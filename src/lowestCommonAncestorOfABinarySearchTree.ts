// 235. Lowest Common Ancestor of a Binary Search Tree
// Difficulty: Medium
// Source: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
//
// Description:
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given
// nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined
// between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as
// descendants (where we allow **a node to be a descendant of itself**).”
//
// Clarifying Questions:
// * Can the tree be empty or have a single node?
// * Do we guarantee that both `p` and `q` exist in the tree?
// * Do we only chech that values of the p & q nodes match, or do they need
//   to be the actual same node (ie. same reference, or same sub-tree)?
// * Can the tree contain duplicate values?
//
// Constraints:
// * The number of nodes in the tree is in the range `[2, 10^5]`.
// * `-10^9 <= Node.val <= 10^9`
// * All `Node.val` are **unique**.
// * `p != q`
// * `p` and `q` will exist in the BST.

import TreeNode from "./utils/TreeNode";

export default function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null || p === null || q === null) return null;
  const pPath = getPath(root, p);
  const qPath = getPath(root, q);
  const minPath = Math.min(pPath.length, qPath.length);
  let i = 0;
  while (i < pPath.length && i < qPath.length && pPath[i] === qPath[i]) i++;
  return pPath[i - 1];
}

function getPath(root: TreeNode, target: TreeNode): TreeNode[] {
  const path: TreeNode[] = [];
  _getPath(root, target, path);
  return path;
}
function _getPath(root: TreeNode, target: TreeNode, path: TreeNode[]) {
  path.push(root);
  if (root === target) return;
  _getPath(root.val > target.val ? root.left! : root.right!, target, path);
}
