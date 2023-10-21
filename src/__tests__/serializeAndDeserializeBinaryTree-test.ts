import { deserialize, serialize } from "../serializeAndDeserializeBinaryTree";
import TreeNode from "../utils/TreeNode";

describe("serializeAndDeserializeBinaryTree", () => {
  describe("serialize", () => {
    [{ tree: [1, 2, 3, null, null, 4, 5] }].forEach(({ tree }) => {
      test(`${JSON.stringify(tree)}`, () => {
        expect(serialize(TreeNode.fromArray(tree))).toEqual(JSON.stringify(tree));
      });
    });
  });
  describe("deserialize", () => {
    [{ input: [1, 2, 3, null, null, 4, 5] }].forEach(({ input }) => {
      test(`${input}`, () => {
        expect(deserialize(JSON.stringify(input))?.toArray()).toEqual(input);
      });
    });
  });
});
