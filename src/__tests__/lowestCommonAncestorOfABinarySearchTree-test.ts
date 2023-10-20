import lowestCommonAncestor from "../lowestCommonAncestorOfABinarySearchTree";
import TreeNode from "../utils/TreeNode";

describe("lowestCommonAncestorOfABinarySearchTree", () => {
  [
    { root: [2, 1], p: 2, q: 1, expected: 2 },
    // { root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p: 2, q: 8, expected: 6 },
    // { root: [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p: 2, q: 4, expected: 2 },
  ].forEach(({ root, p, q, expected }) => {
    test(`${JSON.stringify(root)}, ${p}, ${q} -> ${expected}`, () => {
      const tree = TreeNode.fromArray(root);
      const expectedNode = tree?.bstFindNode(expected) ?? null;
      const pNode = tree?.bstFindNode(p) ?? null;
      const qNode = tree?.bstFindNode(q) ?? null;
      expect(lowestCommonAncestor(tree, pNode, qNode)).toEqual(expectedNode);
    });
  });
});
