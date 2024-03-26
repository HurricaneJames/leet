// 230. Kth Smallest Element in a BST
// Difficulty: Medium
// Source: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
//
// Description:
// Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest
// value (1-indexed) of all the values of the nodes in the tree.
//
// Constraints:
// * The number of nodes in the tree is n.
// * 1 <= k <= n <= 10^4
// * 0 <= Node.val <= 10^4
//
// Follow up:
// * If the BST is modified often (i.e., we can do insert and delete operations) and you
//   need to find the kth smallest frequently, how would you optimize?
//
// Complexity:
// O(n) time, O(1) space

import TreeNode from "./utils/TreeNode";

export default function kthSmallest(root: TreeNode | null, k: number): number {
  if (root === null) return -1;
  return _kthSmallest(root, k)[1];
}

// return [remaining, result]
function _kthSmallest(root: TreeNode, k: number): [number, number] {
  let remaining = k;
  if (root.left) {
    let result = _kthSmallest(root.left, remaining);
    if (result[0] === 0) return result;
    remaining = result[0];
  }
  if (remaining === 1) return [0, root.val];
  remaining--;
  if (root.right) {
    let result = _kthSmallest(root.right, remaining);
    if (result[0] === 0) return result;
    remaining = result[0];
  }
  return [remaining, -1];
}
