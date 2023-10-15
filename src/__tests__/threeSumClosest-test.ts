import threeSumClosest from "../threeSumClosest";

describe("threeSumClosest", () => {
  [
    { nums: [-1, 2, 1, -4], target: 1, expected: 2 },
    { nums: [0, 0, 0], target: 1, expected: 0 },
    { nums: [0, 1, 0], target: 2, expected: 1 },
    { nums: [-5, -4, 2, 1], target: -3, expected: -2 },
  ].forEach(({ nums, target, expected }) => {
    it(`[${nums}], ${target} => ${expected}`, () => {
      expect(threeSumClosest(nums, target)).toBe(expected);
    });
  });
});
