import kthSmallest from "../kthSmallestElementInABST";
import TreeNode from "../utils/TreeNode";

describe("kthSmallestElementInABST-test", () => {
  [
    { root: [3, 1, 4, null, 2], k: 1, expected: 1 },
    { root: [5, 3, 6, 2, 4, null, null, 1], k: 3, expected: 3 },
    { root: [5, 3, 6, 2, 4, null, null, 1], k: 4, expected: 4 },
  ].forEach(({ root, k, expected }) => {
    test(`${JSON.stringify({ root, k, expected })}`, () => {
      expect(kthSmallest(TreeNode.fromArray(root), k)).toEqual(expected);
    });
  });
});
