import fourSum from "../fourSum";
import kSum from "../kSum";

describe("fourSum", () => {
  [
    {
      nums: [-1, 0, 1, 2, -1, -4],
      k: 3,
      target: 0,
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    { nums: [0, 1, 0], k: 3, target: 0, expected: [] },
    { nums: [0, 0, 0], k: 3, target: 0, expected: [[0, 0, 0]] },
    {
      nums: [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4],
      k: 3,
      target: 0,
      expected: [
        [-4, 0, 4],
        [-4, 1, 3],
        [-3, -1, 4],
        [-3, 0, 3],
        [-3, 1, 2],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
    {
      nums: [1, 0, -1, 0, -2, 2],
      k: 4,
      target: 0,
      expected: [
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
        [-1, 0, 0, 1],
      ],
    },
    { nums: [2, 2, 2, 2, 2], k: 4, target: 8, expected: [[2, 2, 2, 2]] },
    {
      nums: [-2, -1, -1, 1, 1, 2, 2],
      k: 4,
      target: 0,
      expected: [
        [-2, -1, 1, 2],
        [-1, -1, 1, 1],
      ],
    },
  ].forEach(({ nums, k, target, expected }) => {
    it(`[${nums}] => [${expected.map((e) => `[${e}]`)}]`, () => {
      const sums = kSum(nums, k, target);
      expect(sums.length).toBe(expected.length);
      expected.forEach((exp) => {
        expect(
          sums.findIndex((v) => v.sort().join(",") === exp.join(",")) > -1
        );
      });
    });
  });
});
