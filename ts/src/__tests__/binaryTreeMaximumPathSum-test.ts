import binaryTreeMaximumPathSum from "../binaryTreeMaximumPathSum";
import TreeNode from "../utils/TreeNode";

describe("binaryTreeMaximumPathSum", () => {
  [
    { root: [1, 2, 3], expected: 6 },
    { root: [-10, 9, 20, null, null, 15, 7], expected: 42 },
    { root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], expected: 49 },
    { root: [-3], expected: -3 },
  ].forEach(({ root, expected }) => {
    test(`${JSON.stringify(root)} -> ${expected}`, () => {
      expect(binaryTreeMaximumPathSum(TreeNode.fromArray(root))).toEqual(expected);
    });
  });
});
