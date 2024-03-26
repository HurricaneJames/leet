import findFirstAndLastPositionOfElementInSortedArray from "../findFirstAndLastPositionOfElementInSortedArray";

describe("findFirstAndLastPositionOfElementInSortedArray", () => {
  [
    { nums: [], target: 0, result: [-1, -1] },
    { nums: [1], target: 1, result: [0, 0] },
    { nums: [1], target: 0, result: [-1, -1] },
    { nums: [1, 1], target: 1, result: [0, 1] },
    { nums: [1, 2], target: 1, result: [0, 0] },
    { nums: [1, 2], target: 2, result: [1, 1] },
    { nums: [5, 7, 7, 8, 8, 10], target: 8, result: [3, 4] },
    { nums: [5, 7, 7, 8, 8, 10], target: 6, result: [-1, -1] },
  ].forEach(({ nums, target, result }) => {
    it(`[${nums}], ${target} -> [${result}]`, () => {
      expect(findFirstAndLastPositionOfElementInSortedArray(nums, target)).toEqual(result);
    });
  });
});
