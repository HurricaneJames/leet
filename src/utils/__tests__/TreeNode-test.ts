import TreeNode from "../TreeNode";

describe("TreeNode", () => {
  describe("fromArray", () => {
    it("should build a tree from an array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const tree = TreeNode.fromArray(array);
      expect(tree?.val).toEqual(1);
      expect(tree?.left?.val).toEqual(2);
      expect(tree?.right?.val).toEqual(3);
      expect(tree?.left?.left?.val).toEqual(4);
      expect(tree?.left?.right?.val).toEqual(5);
      expect(tree?.right?.left?.val).toEqual(6);
      expect(tree?.right?.right?.val).toEqual(7);
    });
    it("should handle nulls", () => {
      const array = [1, 2, null, 4, 5, 6, 7];
      const tree = TreeNode.fromArray(array);
      expect(tree?.val).toEqual(1);
      expect(tree?.left?.val).toEqual(2);
      expect(tree?.right).toBeNull();
      expect(tree?.left?.left?.val).toEqual(4);
      expect(tree?.left?.right?.val).toEqual(5);
    });
  });
  describe("toArray", () => {
    it("should convert a tree to an array", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const tree = TreeNode.fromArray(array);
      const result = tree?.toArray();
      expect(result).toEqual(array);
    });
    it("should handle nulls", () => {
      const array = [1, 2, null, 4, 5, 6, 7];
      const tree = TreeNode.fromArray(array);
      const result = tree?.toArray();
      expect(result).toEqual([1, 2, null, 4, 5]);
    });
  });
  describe("BSTFindNode", () => {
    it("should find a node in a BST", () => {
      const array = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5];
      const tree = TreeNode.fromArray(array);
      const node = tree?.bstFindNode(3);
      expect(node).not.toBeNull();
      expect(node).not.toBe(undefined);
      expect(node).toBe(tree?.left?.right?.left);
    });
  });
});
