import isSubtree from "../subtreeOfAnotherTree";
import TreeNode from "../utils/TreeNode";

describe("subtreeOfAnotherTree", () => {
  [
    { s: [3, 4, 5, 1, 2], t: [4, 1, 2], expected: true },
    { s: [3, 4, 5, 1, 2, null, null, null, null, 0], t: [4, 1, 2], expected: false },
    { s: [1, 1], t: [1], expected: true },
    { s: [1, 2, 3], t: [1, 2], expected: false },
    { s: [1, 2, 3], t: [1, null, 2], expected: false },
    { s: [1, 2, 3], t: [2, 3], expected: false },
    { s: [1, 2, 3], t: [1, 2, 3], expected: true },
  ].forEach(({ s, t, expected }) => {
    test(`${JSON.stringify(s)}, ${JSON.stringify(t)} -> ${expected}`, () => {
      expect(isSubtree(TreeNode.fromArray(s), TreeNode.fromArray(t))).toEqual(expected);
    });
  });
});
