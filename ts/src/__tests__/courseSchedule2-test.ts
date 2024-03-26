import findOrder from "../courseSchedule2";

describe("courseSchedule2", () => {
  [
    { n: 1, p: [], expected: [[0]] },
    { n: 2, p: [[1, 0]], expected: [[0, 1]] },
    {
      n: 2,
      p: [
        [1, 0],
        [0, 1],
      ],
      expected: [[]],
    },
    { n: 2, p: [[0, 1]], expected: [[1, 0]] },
    {
      n: 3,
      p: [
        [1, 0],
        [2, 0],
      ],
      expected: [
        [0, 1, 2],
        [0, 2, 1],
      ],
    },
  ].forEach(({ n, p, expected }, idx) => {
    test(`${n}, ${JSON.stringify(p)} -> ${JSON.stringify(expected)}`, () => {
      const result = findOrder(n, p);
      expect(expected).toContainEqual(result);
    });
  });
});
