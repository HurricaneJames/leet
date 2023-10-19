import combinationSum from "../combinationSum";

describe("combinationSum", () => {
  [
    { candidates: [2, 3, 6, 7], target: 7, expected: [[2, 2, 3], [7]] },
    {
      candidates: [2, 3, 5],
      target: 8,
      expected: [
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ],
    },
    { candidates: [], target: 0, expected: [] },
    { candidates: [], target: 1, expected: [] },
    { candidates: [1], target: 1, expected: [[1]] },
    { candidates: [1], target: 2, expected: [[1, 1]] },
  ].forEach(({ candidates, target, expected }) => {
    test(`[${candidates}], ${target} -> [${expected}]`, () => {
      expect(combinationSum(candidates, target)).toEqual(expected);
    });
  });
});
