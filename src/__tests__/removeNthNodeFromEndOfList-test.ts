import { ListNode, arrayToList } from "../utils/ListNode";
import removeNthFromEnd from "../removeNthNodeFromEndOfList";

describe("removeNthNodeFromEndOfList", () => {
  [
    { list: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
    { list: [1], n: 1, expected: [] },
    { list: [1, 2], n: 1, expected: [1] },
    { list: [1, 2, 3], n: 3, expected: [2, 3] },
  ].forEach(({ list, n, expected }) => {
    it(`[${list}] n: ${n} -> [${expected}]`, () => {
      const result = removeNthFromEnd(arrayToList(list), n);
      expect(result ? result.toArray() : []).toEqual(
        expected
      );
    });
  });
});

