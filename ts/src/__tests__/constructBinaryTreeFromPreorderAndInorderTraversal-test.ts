import constructBinaryTreeFromPreorderAndInorderTraversal from "../constructBinaryTreeFromPreorderAndInorderTraversal";
import TreeNode from "../utils/TreeNode";

describe("constructBinaryTreeFromPreorderAndInorderTraversal", () => {
  [
    {
      preorder: [3, 9, 10, 20, 15, 7],
      inorder: [10, 9, 3, 15, 20, 7],
      expected: [3, 9, 20, 10, null, 15, 7],
    },
    {
      preorder: [3, 9, 20, 15, 7],
      inorder: [9, 3, 15, 20, 7],
      expected: [3, 9, 20, null, null, 15, 7],
    },
    { preorder: [-1], inorder: [-1], expected: [-1] },
    { preorder: [1, 2, 3], inorder: [2, 3, 1], expected: [1, 2, null, null, 3] },
  ].forEach(({ preorder, inorder, expected }) => {
    test(`${JSON.stringify({ preorder, inorder })} => ${expected}`, () => {
      const result =
        constructBinaryTreeFromPreorderAndInorderTraversal(preorder, inorder)?.toArray() ?? [];
      expect(result).toEqual(expected);
    });
  });
});
