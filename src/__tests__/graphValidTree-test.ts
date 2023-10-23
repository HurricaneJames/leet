import graphValidTree from "../graphValidTree";

describe("graphValidTree", () => {
  [
    { n: 1, edges: [], expected: true },
    { n: 2, edges: [], expected: false },
    { n: 2, edges: [[0, 1]], expected: true },
    { n: 3, edges: [[0, 1]], expected: false },
    {
      n: 3,
      edges: [
        [0, 1],
        [1, 2],
      ],
      expected: true,
    },
    {
      n: 3,
      edges: [
        [0, 1],
        [0, 2],
      ],
      expected: true,
    },
    {
      n: 3,
      edges: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      expected: false,
    },
    {
      n: 5,
      edges: [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ],
      expected: true,
    },
    {
      n: 5,
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 3],
        [1, 4],
      ],
      expected: false,
    },
  ].forEach(({ n, edges, expected }) => {
    test(`${n}, ${JSON.stringify(edges)} -> ${expected}`, () => {
      expect(graphValidTree(n, edges)).toEqual(expected);
    });
  });
});
