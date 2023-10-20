export default class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  toArray(): number[] {
    const result: number[] = [];
    this._toArray(result, 0);
    return result;
  }

  _toArray(result: number[], i: number) {
    result[i] = this.val;
    if (this.left) this.left._toArray(result, i * 2 + 1);
    if (this.right) this.right._toArray(result, i * 2 + 2);
  }
}

export function buildTree(n: number[]): TreeNode | null {
  return _buildTree(n, 0);
}

function _buildTree(n: number[], node: number): TreeNode | null {
  if (node >= n.length) return null;
  return new TreeNode(n[node], _buildTree(n, node * 2 + 1), _buildTree(n, node * 2 + 2));
}
