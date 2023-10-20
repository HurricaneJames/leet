import invertBinaryTree from "../invertBinaryTree";
import { buildTree } from "../utils/TreeNode";

describe("invertBinaryTree", () => {
  [
    { input: [], expected: [] },
    { input: [4, 2, 7, 1, 3, 6, 9], expected: [4, 7, 2, 9, 6, 3, 1] },
    { input: [2, 1, 3], expected: [2, 3, 1] },
  ].forEach(({ input, expected }) => {
    test(`${JSON.stringify(input)} -> ${JSON.stringify(expected)}`, () => {
      expect(invertBinaryTree(buildTree(input))?.toArray() ?? []).toEqual(expected);
    });
  });
});
