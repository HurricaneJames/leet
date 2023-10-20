export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  toArray(): TreeNodeArray {
    const result: TreeNodeArray = [];
    this._toArray(result, 0);
    return result;
  }

  _toArray(result: TreeNodeArray, i: number) {
    result[i] = this.val;
    const left = i * 2 + 1;
    if (this.left) this.left._toArray(result, left);
    if (this.right) this.right._toArray(result, left + 1);
  }
}

type TreeNodeArray = (number | null)[];
export function buildTree(n: TreeNodeArray): TreeNode | null {
  return _buildTree(n, 0);
}

function _buildTree(n: TreeNodeArray, node: number): TreeNode | null {
  if (node >= n.length || n[node] == null) return null;
  return new TreeNode(n[node]!, _buildTree(n, node * 2 + 1), _buildTree(n, node * 2 + 2));
}
