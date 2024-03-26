import countComponents from "../numberOfConnectedComponentsInAnUndirectedGraph";

describe("numberOfConnectedComponentsInAnUndirectedGraph", () => {
  [
    { n: 1, edges: [], expected: 1 },
    { n: 2, edges: [], expected: 2 },
    { n: 2, edges: [[0, 1]], expected: 1 },
    {
      n: 5,
      edges: [
        [0, 1],
        [1, 2],
        [3, 4],
      ],
      expected: 2,
    },
    {
      n: 5,
      edges: [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      expected: 1,
    },
    {
      n: 5,
      edges: [
        [2, 3],
        [3, 4],
        [2, 4],
      ],
      expected: 3,
    },
  ].forEach(({ n, edges, expected }) => {
    test(`${n}, ${JSON.stringify(edges)} -> ${expected}`, () => {
      expect(countComponents(n, edges)).toEqual(expected);
    });
  });
});
