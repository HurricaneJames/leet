import { ListNode } from "../utils/ListNode";
import mergeKSortedLists, { mergeKSortedListsWithoutHeap } from "../mergeKSortedLists";

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

function convertToList(values: number[]): ListNode {
  if (values.length === 0) throw new Error("Invalid Input");
  const head = new ListNode(values[0]);
  let tail = head;
  for (let i = 1; i < values.length; i++) {
    tail.next = new ListNode(values[i]);
    tail = tail.next;
  }
  return head;
}

function convertToArray(list: ListNode): number[] {
  const arr: number[] = [];
  let n = list;
  arr.push(n.val);
  while (n.next !== null) {
    n = n.next;
    arr.push(n.val);
  }
  return arr;
}
