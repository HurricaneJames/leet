import threeSum from "../threeSum";

describe("threeSum", () => {
  [
    {
      nums: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { nums: [0, 1, 0], expected: [] },
    { nums: [0, 0, 0], expected: [[0, 0, 0]] },
    { nums: [-1,0,1,2,-1,-4,-2,-3,3,0,4], expected: [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]] },
    //                                              [[-4,0,4],[-4,1,3],          [-3,0,3],[-3,1,2],          [-2,0,2],[-1,-1,2],[-1,0,1]]
  ].forEach(({ nums, expected }) => {
    it(`[${nums}] => [${expected.map((e) => `[${e}]`)}]`, () => {
      const sums = threeSum(nums);
      expect(sums.length).toBe(expected.length);
      expected.forEach((exp) => {
        expect(sums.findIndex((v) => v.sort().join(",") === exp.join(",")));
      });
    });
  });
});
