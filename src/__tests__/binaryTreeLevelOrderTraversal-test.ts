import binaryTreeLevelOrderTraversal from "../binaryTreeLevelOrderTraversal";
import TreeNode from "../utils/TreeNode";

describe("binaryTreeLevelOrderTraversal", () => {
  [
    { root: [3, 9, 20, null, null, 15, 7], result: [[3], [9, 20], [15, 7]] },
    { root: [1], result: [[1]] },
    { root: [], result: [] },
    { root: [1, 2, 3, 4, 5], result: [[1], [2, 3], [4, 5]] },
    { root: [1, 2, 3, 4, null, null, 5], result: [[1], [2, 3], [4, 5]] },
    { root: [1, 2, 3, 4, 5, 6, 7], result: [[1], [2, 3], [4, 5, 6, 7]] },
  ].forEach(({ root, result }) => {
    test(`${JSON.stringify(root)} -> ${JSON.stringify(result)}`, () => {
      expect(binaryTreeLevelOrderTraversal(TreeNode.fromArray(root))).toEqual(result);
    });
  });
});
