import search from "../searchInRotatedSortedArray";

describe("searchInRotatedSortedArray", () => {
  [
    { nums: [1, 3], target: 1, expected: 0 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
    { nums: [1], target: 0, expected: -1 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 0, expected: 0 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 1, expected: 1 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 2, expected: 2 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 3, expected: 3 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 4, expected: 4 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 5, expected: 5 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 6, expected: 6 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 7, expected: 7 },
    { nums: [0, 1, 2, 3, 4, 5, 6, 7, 8], target: 8, expected: 8 },
    { nums: [6, 1, 2, 3, 4, 5], target: 3, expected: 3 },
  ].forEach(({ nums, target, expected }) => {
    test(`[${nums}], ${target} -> ${expected}`, () => {
      expect(search(nums, target)).toEqual(expected);
    });
  });
});
