import twoSum from "../twoSum";

describe("twoSum", () => {
  [
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [1, 1, 1, 1], target: 2, expected: [0, 1] },
  ].forEach(({ nums, target, expected }) => {
    test(`${JSON.stringify(nums)}, ${target} => ${JSON.stringify(expected)}`, () => {
      expect(twoSum(nums, target)).toEqual(expected);
    });
  });
});
