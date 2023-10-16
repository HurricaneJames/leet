import { arrayToList } from "../utils/ListNode";
import reverseNodesInKGroup from "../reverseNodesInKGroup";

describe("reverseNodesInKGroup", () => {
  [
    { head: [1], k: 1, expected: [1] },
    { head: [1, 2, 3, 4, 5, 6], k: 3, expected: [3, 2, 1, 6, 5, 4] },
    { head: [1, 2, 3, 4, 5], k: 2, expected: [2, 1, 4, 3, 5] },
    { head: [1, 2, 3, 4, 5], k: 3, expected: [3, 2, 1, 4, 5] },
  ].forEach(({ head, k, expected }) => {
    it(`reverseNodesInKGroup([${head}], k: ${k}) should return ${expected}`, () => {
      expect(
        reverseNodesInKGroup(arrayToList(head), k)?.toArray() ?? []
      ).toEqual(expected);
    });
  });
});
