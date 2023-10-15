import removeNthFromEnd, { ListNode } from "../removeNthNodeFromEndOfList";

describe("removeNthNodeFromEndOfList", () => {
  [
    { list: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
    { list: [1], n: 1, expected: [] },
    { list: [1, 2], n: 1, expected: [1] },
    { list: [1, 2, 3], n: 3, expected: [2, 3] },
  ].forEach(({ list, n, expected }) => {
    it(`[${list}] n: ${n} -> [${expected}]`, () => {
      expect(listToArray(removeNthFromEnd(arrayToList(list), n))).toEqual(
        expected
      );
    });
  });
});

function arrayToList(nums: number[]): ListNode {
  const head = new ListNode(nums[0]);
  let cur = head;
  for (let i=1; i<nums.length; i++) {
    cur = cur.next = new ListNode(nums[i]);
  }
  return head;
}

function listToArray(head: ListNode | null): number[] {
  if (head === null) return [];
  let output = [head.val];
  while (head.next) {
    head = head.next;
    output.push(head.val);
  }
  return output;
}
