import { arrayToList } from "../utils/ListNode";
import swapPairs from "../swapNodesInPairs";

describe("swapNodesInPairs", () => {
  [
    { head: [], expected: [] },
    { head: [1], expected: [1] },
    { head: [1, 2], expected: [2, 1] },
    { head: [1, 2, 3], expected: [2, 1, 3] },
    { head: [2, 1, 4, 3], expected: [1, 2, 3, 4] },
    { head: [1, 2, 3, 4, 5], expected: [2, 1, 4, 3, 5] },
  ].forEach(({ head, expected }) => {
    it(`[${head}] -> [${expected}]`, () => {
      expect(swapPairs(arrayToList(head))?.toArray() ?? []).toEqual(expected);
    });
  });
});
