import validateBinarySearchTree from "../validateBinarySearchTree";

export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }

  static fromArray(n: TreeNodeArray): TreeNode | null {
    return _buildTree(n, 0);
  }

  toArray(): TreeNodeArray {
    const result: TreeNodeArray = [];
    this._toArray(result, 0);
    for (let i = 0; i < result.length; i++) {
      if (result[i] == null) result[i] = null;
    }
    return result;
  }

  _toArray(result: TreeNodeArray, i: number) {
    result[i] = this.val;
    const left = i * 2 + 1;
    if (this.left) this.left._toArray(result, left);
    if (this.right) this.right._toArray(result, left + 1);
  }

  // Will assume the tree is a binary search tree and return the node with the given value
  bstFindNode(val: number): TreeNode | null {
    if (this.val === val) return this;
    if (val < this.val && this.left) return this.left.bstFindNode(val);
    if (val > this.val && this.right) return this.right.bstFindNode(val);
    return null;
  }

  bstFindPathToNode(node: TreeNode): TreeNode[] {
    const path: TreeNode[] = [];
    return _bstFindPathToNode(this, node, path) ? path : [];
  }

  bstFindPathToValue(value: number): TreeNode[] {
    const path: TreeNode[] = [];
    return _bstFindPathToValue(this, value, path) ? path : [];
  }

  /**
   * Returns true if the tree is a valid binary search tree, false otherwise
   * @complexity O(n) time / O(n) space
   */
  bstIsValid(): boolean {
    return validateBinarySearchTree(this);
  }
}

type TreeNodeArray = (number | null)[];
function _buildTree(n: TreeNodeArray, node: number): TreeNode | null {
  if (node >= n.length || n[node] == null) return null;
  return new TreeNode(n[node]!, _buildTree(n, node * 2 + 1), _buildTree(n, node * 2 + 2));
}

// returns true if a path was found, false if there is no path
function _bstFindPathToNode(root: TreeNode | null, target: TreeNode, path: TreeNode[]): boolean {
  if (root === null) return false;
  path.push(root);
  return (
    root === target ||
    _bstFindPathToNode(root.val > target.val ? root.left : root.right, target, path)
  );
}

// returns true if a path was found, false if there is no path
function _bstFindPathToValue(root: TreeNode | null, target: number, path: TreeNode[]): boolean {
  if (root === null) return false;
  path.push(root);
  return (
    root.val === target ||
    _bstFindPathToValue(root.val > target ? root.left : root.right, target, path)
  );
}
