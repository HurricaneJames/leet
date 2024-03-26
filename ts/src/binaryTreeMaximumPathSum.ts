// 124. Binary Tree Maximum Path Sum
// Difficulty: Hard
// Source: https://leetcode.com/problems/binary-tree-maximum-path-sum/
//
// Description:
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the
// sequence has an edge connecting them. A node can only appear in the sequence at most
// once. Note that the path does not need to pass through the root.
//
// The path sum of a path is the sum of the node's values in the path.
//
// Given the root of a binary tree, return the maximum path sum of any non-empty path.
//
// Clarifying Questions:
// * Can the tree be empty?
// * What is the max/min values of the nodes?
// * How many nodes can the tree have?
//
// Constraints:
// * The number of nodes in the tree is in the range [1, 3 * 10^4].
// * -1000 <= Node.val <= 1000

import TreeNode from "./utils/TreeNode";

const MIN_VAL = -1000;

// time complexity: O(n) (only process each node once and do constant work at each node)
// space complexity: O(n) (recursion stack)

export default function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0;
  const left = _maxPathSumPartial(root.left);
  const right = _maxPathSumPartial(root.right);

  return Math.max(
    root.val,
    left[0],
    right[0],
    left[1] + right[1] + root.val,
    left[1] + root.val,
    right[1] + root.val
  );
}

// returns [maxPathSum, maxPathSumPartial]
function _maxPathSumPartial(root: TreeNode | null): [number, number] {
  if (!root) return [MIN_VAL - 1, MIN_VAL - 1];
  const left = _maxPathSumPartial(root.left);
  const right = _maxPathSumPartial(root.right);

  const maxLeft = Math.max(left[0], left[1]);
  const maxRight = Math.max(right[0], right[1]);

  const maxPartial = Math.max(root.val, left[1] + root.val, right[1] + root.val);
  return [Math.max(root.val + left[1] + right[1], maxPartial, left[0], right[0]), maxPartial];
}
