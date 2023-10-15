import mergeTwoLists from "../mergeTwoSortedLists";
import { ListNode, arrayToList } from "../utils/ListNode";

describe("mergeTwoSortedLists", () => {
  [
    { l1: [1, 2, 4], l2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
    { l1: [], l2: [], expected: [] },
    { l1: [], l2: [0], expected: [0] },
    { l1: [1, 2, 3], l2: [], expected: [1, 2, 3] },
    { l1: [1], l2: [2], expected: [1, 2] },
  ].forEach(({ l1, l2, expected }) => {
    it(`[${l1}] + [${l2}] -> [${expected}]`, () => {
      if (expected.length === 0) {
        expect(mergeTwoLists(arrayToList(l1), arrayToList(l2))).toBe(null);
      } else {
        expect(
          mergeTwoLists(arrayToList(l1), arrayToList(l2))?.toArray()
        ).toEqual(expected);
      }
    });
  });
});
