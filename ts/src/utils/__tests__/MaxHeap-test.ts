import MaxHeap from "../MaxHeap";

describe("MaxHeap", () => {
  it('should make return the larest item on pop', () => {
    const tree = new MaxHeap();
    tree.add(3);
    tree.add(4);
    tree.add(31);
    tree.add(6);
    expect(tree.values).toEqual([31, 6, 4, 3]);

    expect(tree.pop()).toEqual(31);
    expect(tree.values).toEqual([6, 3, 4]);
  });

  it('should add items from an array', () => {
    const tree = new MaxHeap();
    tree.addAll([3, 4, 31, 6]);
    expect(tree.values).toEqual([31, 6, 4, 3]);
  });
});
