import lengthOfLIS from "../longestIncreasingSubsequence";

describe("longestIncreasingSubsequence", () => {
  [
    { nums: [10, 9, 2, 5, 3, 7, 101, 18], expected: 4 },
    { nums: [0, 1, 0, 3, 2, 3], expected: 4 },
    { nums: [7, 7, 7, 7, 7, 7, 7], expected: 1 },
    { nums: [10, 1, 2, 3, 1, 9, 4, 5, 6], expected: 6 },
  ].forEach(({ nums, expected }) => {
    test(`${JSON.stringify(nums)} -> ${expected}`, () => {
      expect(lengthOfLIS(nums)).toBe(expected);
    });
  });
});
