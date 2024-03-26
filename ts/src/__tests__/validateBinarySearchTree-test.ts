import TreeNode from "../utils/TreeNode";
import isValidBST from "../validateBinarySearchTree";

describe("validateBinarySearchTree", () => {
  [
    { root: [1], expected: true },
    { root: [1, 1], expected: false },
    { root: [1, null, 1], expected: false },
    { root: [3, 1, 5, 2, 0], expected: false },
    { root: [2, 1, 3], expected: true },
    { root: [5, 1, 4, null, null, 3, 6], expected: false },
    { root: [5, 4, 6, null, null, 3, 7], expected: false },
  ].forEach(({ root, expected }) => {
    test(`${JSON.stringify(root)} -> ${expected}`, () => {
      expect(isValidBST(TreeNode.fromArray(root))).toEqual(expected);
    });
  });
});
