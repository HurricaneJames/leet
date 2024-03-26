import fourSum from "../fourSum";

describe("fourSum", () => {
  [
    {
      nums: [1,0,-1,0,-2,2],
      target: 0,
      expected: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]],
    },
    { nums: [2, 2, 2, 2, 2], target: 8, expected: [[2, 2, 2, 2]] },
    { nums: [-2, -1, -1, 1, 1, 2, 2], target: 0, expected: [[-2,-1,1,2],[-1,-1,1,1]] },
  ].forEach(({ nums, target, expected }) => {
    it(`[${nums}] => [${expected.map((e) => `[${e}]`)}]`, () => {
      const sums = fourSum(nums, target);
      expect(sums.length).toBe(expected.length);
      expected.forEach((exp) => {
        expect(sums.findIndex((v) => v.sort().join(",") === exp.join(",")) > -1);
      });
    });
  });
});
