import maximumProductSubarray from "../maximumProductSubarray";

describe("maximumProductSubarray", () => {
  [
    { nums: [], expected: 0 },
    { nums: [1], expected: 1 },
    { nums: [-1], expected: -1 },
    { nums: [0, 2], expected: 2 },
    { nums: [1, 3], expected: 3 },
    { nums: [1, -2, 3], expected: 3 },
    { nums: [2, 3, -2, 4], expected: 6 },
    { nums: [-2, 0, -1], expected: 0 },
    { nums: [-3, 0, 1, -2], expected: 1 },
  ].forEach(({ nums, expected }) => {
    test(`${JSON.stringify(nums)} => ${expected}`, () => {
      expect(maximumProductSubarray(nums)).toEqual(expected);
    });
  });
});
