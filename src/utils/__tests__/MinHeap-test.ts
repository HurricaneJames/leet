import MinHeap from "../MinHeap";

describe("MaxHeap", () => {
  it('should make return the larest item on pop', () => {
    const tree = new MinHeap();
    tree.add(3);
    tree.add(4);
    tree.add(31);
    tree.add(6);
    expect(tree.values).toEqual([3, 4, 31, 6]);

    expect(tree.pop()).toEqual(3);
    expect(tree.pop()).toEqual(4);
    expect(tree.pop()).toEqual(6);
    expect(tree.pop()).toEqual(31);
  });

  it('should add items from an array', () => {
    const tree = new MinHeap();
    tree.addAll([3, 4, 31, 6, 8]);
    expect(tree.pop()).toEqual(3);
    expect(tree.pop()).toEqual(4);
    expect(tree.pop()).toEqual(6);
    expect(tree.pop()).toEqual(8);
    expect(tree.pop()).toEqual(31);
  });
});
