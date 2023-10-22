import pacificAtlantic from "../pacificAtlanticWaterFlow";

describe("pacificAtlanticWaterFlow", () => {
  [
    {
      heights: [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ],
      output: [
        [0, 4],
        [1, 3],
        [1, 4],
        [2, 2],
        [3, 0],
        [3, 1],
        [4, 0],
      ],
    },
    { heights: [[1]], output: [[0, 0]] },
    {
      heights: [
        [2, 1],
        [1, 2],
      ],
      output: [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
    },
  ].forEach(({ heights, output }) => {
    test(`${JSON.stringify(heights)} -> ${JSON.stringify(output)}`, () => {
      expect(pacificAtlantic(heights)).toEqual(output);
    });
  });
});
