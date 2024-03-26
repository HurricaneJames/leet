// 297. Serialize and Deserialize Binary Tree
// Difficulty: Hard
// Source: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
//
// Description:
// Serialization is the process of converting a data structure or object into a sequence
// of bits so that it can be stored in a file or memory buffer, or transmitted across a
// network connection link to be reconstructed later in the same or another computer
// environment.
//
// Design an algorithm to serialize and deserialize a binary tree. There is no restriction
// on how your serialization/deserialization algorithm should work. You just need to
// ensure that a binary tree can be serialized to a string and this string can be
// deserialized to the original tree structure.
//
// Clarification:
// The input/output format is the same as how LeetCode serializes a binary tree. You do
// not necessarily need to follow this format, so please be creative and come up with
// different approaches yourself.
//
// Clarifying Questions:
// * What are the possible number of nodes
// * What are the possible values of the nodes
// * Where are we using this?
// * Do we need to worry about space?

import TreeNode from "./utils/TreeNode";

type TreeNodeArray = (number | null)[];
export function serialize(root: TreeNode | null): string {
  const result: TreeNodeArray = [];
  if (root !== null) {
    _toArray(root, result, 0);
    for (let i = 0; i < result.length; i++) {
      if (result[i] == null) result[i] = null;
    }
  }
  return JSON.stringify(result);
}

function _toArray(node: TreeNode, result: TreeNodeArray, i: number) {
  result[i] = node.val;
  const left = i * 2 + 1;
  if (node.left) node.left._toArray(result, left);
  if (node.right) node.right._toArray(result, left + 1);
}

export function deserialize(data: string): TreeNode | null {
  return _buildTree(JSON.parse(data), 0);
}

function _buildTree(n: TreeNodeArray, node: number): TreeNode | null {
  if (node >= n.length || n[node] == null) return null;
  return new TreeNode(n[node]!, _buildTree(n, node * 2 + 1), _buildTree(n, node * 2 + 2));
}
