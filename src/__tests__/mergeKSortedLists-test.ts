import mergeKSortedLists, { LNode, lNode, mergeKSortedListsWithoutHeap } from "../mergeKSortedLists";

describe("mergeKSortedLists", () => {
  const example = [
    [0, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];
  const expectedResult = [0, 1, 2, 3, 4, 4, 5, 6];

  it("should combine and sort the k lists into a single list", () => {
    const exampleLists = example.map((lv) => convertToList(lv));
    const result = mergeKSortedLists(exampleLists);
    expect(convertToArray(result)).toEqual(expectedResult);
  });
  it("should combine and sort the k lists into a single list (no heap)", () => {
    const exampleLists = example.map((lv) => convertToList(lv));
    const result = mergeKSortedListsWithoutHeap(exampleLists);
    expect(convertToArray(result)).toEqual(expectedResult);
  });
});

function convertToList(values: number[]): LNode {
  if (values.length === 0) throw new Error("Invalid Input");
  const head = lNode(values[0]);
  let tail = head;
  for (let i = 1; i < values.length; i++) {
    tail.next = lNode(values[i]);
    tail = tail.next;
  }
  return head;
}

function convertToArray(list: LNode): number[] {
  const arr: number[] = [];
  let n = list;
  arr.push(n.value);
  while (n.next !== null) {
    n = n.next;
    arr.push(n.value);
  }
  return arr;
}
