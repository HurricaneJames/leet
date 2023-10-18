import nextPermutation from "../nextPermutation";

describe("nextPermutation", () => {
  [
    { nums: [], expected: [] },
    { nums: [1], expected: [1] },
    { nums: [1, 2], expected: [2, 1] },
    { nums: [2, 1], expected: [1, 2] },
    { nums: [1, 2, 3], expected: [1, 3, 2] },
    { nums: [3, 2, 1], expected: [1, 2, 3] },
    { nums: [1, 1, 5], expected: [1, 5, 1] },
    { nums: [1, 3, 2], expected: [2, 1, 3] },
    { nums: [1, 3, 4, 2], expected: [1, 4, 2, 3] },
    { nums: [1, 4, 2, 3], expected: [1, 4, 3, 2] },
    { nums: [1, 4, 3, 2], expected: [2, 1, 3, 4] },
  ].forEach(({ nums, expected }) => {
    it(`[${nums}] -> [${expected}]`, () => {
      // console.log('  ', nums);
      nextPermutation(nums);
      // console.log('->', nums);
      expect(nums).toEqual(expected);
    });
  });
});

// [1, 2]
// [2, 1]

// [1, 2, 3],  // start = 3
// [1, 3, 2],
// [2, 1, 3],
// [2, 3, 1],  // bug here
// [3, 1, 2],
// [3, 2, 1]

// [1, 2, 3, 4]
// [1, 2, 4, 3] => [1] + nextPermutation([2, 4, 3])
// [1, 3, 2, 4]
// [1, 3, 4, 2]
// [1, 4, 2, 3] => [1] + nextPermutation([3, 4, 2])

// 3, 4, 2 -> 2, 3, 4
// 1, 3, 2 -> 2, 1, 3

// [1, 4, 3, 2]]

// find where n[right] > n[left], then right shift all of them
// (or take the sub problem)
