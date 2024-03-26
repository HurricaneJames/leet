import combinationSum2 from "../combinationSum2";

describe("combinationSum2", () => {
  [
    { candidates: [], target: 0, expected: [] },
    { candidates: [], target: 1, expected: [] },
    { candidates: [1], target: 1, expected: [[1]] },
    { candidates: [1], target: 2, expected: [] },
    {
      candidates: [10, 1, 2, 7, 6, 1, 5],
      target: 8,
      expected: [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
    },
    {
      candidates: [2, 5, 2, 1, 2],
      target: 5,
      expected: [[1, 2, 2], [5]],
    },
  ].forEach(({ candidates, target, expected }) => {
    test(`${JSON.stringify(candidates)}, ${target} -> ${JSON.stringify(expected)}`, () => {
      expect(combinationSum2(candidates, target)).toEqual(expected);
    });
  });
});
