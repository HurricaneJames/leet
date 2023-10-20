import maxDepth from "../maximumDepthOfBinaryTree";
import { buildTree } from "../utils/TreeNode";

describe("maximumDepthOfBinaryTree", () => {
  [
    { input: [3, 9, 20, null, null, 15, 7], expected: 3 },
    { input: [1, null, 2], expected: 2 },
  ].forEach(({ input, expected }) => {
    test(`${JSON.stringify(input)} => ${expected}`, () => {
      expect(maxDepth(buildTree(input))).toEqual(expected);
    });
  });
});
