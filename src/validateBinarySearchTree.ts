// 98. Validate Binary Search Tree
// Difficulty: Medium
// Source: https://leetcode.com/problems/validate-binary-search-tree/
//
// Description:
// Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// * The left subtree of a node contains only nodes with keys less than the node's key.
// * The right subtree of a node contains only nodes with keys greater than the node's key.
// * Both the left and right subtrees must also be binary search trees.
//
// Clarifying Questions:
// * What should we return if the tree is empty?
// * Any complexity constraints?
//
// Constraints:
// * The number of nodes in the tree is in the range [1, 10^4].
// * -2^31 <= Node.val <= 2^31 - 1

import TreeNode from "./utils/TreeNode";

// time: O(n), space: O(n) (recursion stack)
export default function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, -Infinity, Infinity);
}

function isValid(root: TreeNode | null, lowerBound: number, upperBound: number): boolean {
  if (!root) return true;
  if (root.val <= lowerBound || root.val >= upperBound) return false;
  return isValid(root.left, lowerBound, root.val) && isValid(root.right, root.val, upperBound);
}
