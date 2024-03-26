import removeDuplicates from "../removeDuplicatesFromSortedArray";

describe("removeDuplicatesFromSortedArray", () => {
  [
    { nums: [1, 1, 2], expected: [1, 2] },
    { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: [0, 1, 2, 3, 4] },
    { nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], expected: [1] },
  ].forEach(({ nums, expected }) => {
    it(`[${nums}] -> ${expected}`, () => {
      const k = removeDuplicates(nums);
      expect(k).toBe(expected.length);
      expect(nums.slice(0, k)).toEqual(expected);
    });
  });
});
