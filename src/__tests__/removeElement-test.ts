import removeElement from "../removeElement";

describe("removeElement", () => {
  [
    { nums: [3, 2, 2, 3], val: 3, expected: 2, expectedNums: [2, 2] },
    {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expected: 5,
      expectedNums: [0, 1, 3, 0, 4],
    },
    { nums: [1], val: 1, expected: 0, expectedNums: [] },
    { nums: [1, 1, 1, 1], val: 1, expected: 0, expectedNums: [] },
    { nums: [1, 1, 1, 1], val: 2, expected: 4, expectedNums: [1, 1, 1, 1] },
    { nums: [1, 1, 1, 2], val: 1, expected: 1, expectedNums: [2] },
  ].forEach(({ nums, val, expected, expectedNums }) => {
    it(`nums: [${nums}], val: ${val}, expected: ${expected}, expectedNums: [${expectedNums}]`, () => {
      const result = removeElement(nums, val);
      expect(result).toBe(expected);
      expect(nums.slice(0, expectedNums.length)).toEqual(expectedNums);
    });
  });
});
