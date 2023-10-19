import firstMissingPositive from "../firstMissingPositive";

describe("firstMissingPositive", () => {
  [
    { nums: [], expected: 1 },
    { nums: [1], expected: 2 },
    { nums: [2], expected: 1 },
    { nums: [1, 2, 5, 4, 3], expected: 6 },
    { nums: [1, 2, 0], expected: 3 },
    { nums: [3, 4, -1, 1], expected: 2 },
    { nums: [7, 8, 9, 11, 12], expected: 1 },
  ].forEach(({ nums, expected }) => {
    test(`${JSON.stringify(nums)} -> ${expected}`, () => {
      expect(firstMissingPositive(nums)).toEqual(expected);
    });
  });
});
