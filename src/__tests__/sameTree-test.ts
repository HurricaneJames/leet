import isSameTree from "../sameTree";
import { buildTree } from "../utils/TreeNode";

describe("sameTree", () => {
  [
    { p: [1, 2, 3], q: [1, 2, 3], expected: true },
    { p: [1, 2], q: [1, null, 2], expected: false },
    { p: [1, 2, 1], q: [1, 1, 2], expected: false },
  ].forEach(({ p, q, expected }) => {
    test(`${JSON.stringify(p)}, ${JSON.stringify(q)} => ${expected}`, () => {
      expect(isSameTree(buildTree(p), buildTree(q))).toEqual(expected);
    });
  });
});
