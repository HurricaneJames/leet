// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Difficulty: Medium
// Source: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
//
// Description:
// Given two integer arrays, `preorder` and `inorder`, where `preorder` is the preorder
// traversal of a binary tree and `inorder` is the inorder traversal of the same tree,
// construct and return the binary tree.
//
// Constraints:
// 1 <= preorder.length <= 3000
// inorder.lenght == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// `preorder` and `inorder` consist of unique values.
// Each value of `inorder` also appears in `preorder`.
// `preorder` is guaranteed to be the preorder traversal of the tree.
// `inorder` is guaranteed to be the inorder traversal of the tree.

import TreeNode from "./utils/TreeNode";

export default function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return _buildTree(preorder, inorder, 0, 0, inorder.length);
}

function _buildTree(
  preorder: number[],
  inorder: number[],
  pStart: number,
  iStart: number,
  numElements: number
): TreeNode | null {
  if (numElements <= 0 || iStart >= inorder.length || pStart >= preorder.length) return null;
  const root = new TreeNode(preorder[pStart]);

  // O(n) time
  const inOrderIdx = inorder.indexOf(preorder[pStart], iStart);
  pStart++;
  const numElementsInLeftSubtree = inOrderIdx - iStart;
  root.left = _buildTree(preorder, inorder, pStart, iStart, numElementsInLeftSubtree);

  const nextpStart = pStart + numElementsInLeftSubtree;
  const nextiStart = inOrderIdx + 1;
  const numElementsInRightSubtree = numElements - numElementsInLeftSubtree - 1;
  root.right = _buildTree(preorder, inorder, nextpStart, nextiStart, numElementsInRightSubtree);

  return root;
}
