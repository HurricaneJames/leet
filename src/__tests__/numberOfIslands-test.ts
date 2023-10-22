import numIslands from "../numberOfIslands";

describe("numberOfIslands", () => {
  [
    {
      grid: [["1"]],
      expected: 1,
    },
    {
      grid: [["0"]],
      expected: 0,
    },
    {
      grid: [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ],
      expected: 1,
    },
    {
      grid: [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ],
      expected: 3,
    },
    {
      grid: [
        ["1", "1", "1"],
        ["0", "1", "0"],
        ["1", "1", "1"],
      ],
      expected: 1,
    },
    { grid: [["1", "0", "1", "1", "0", "1", "1"]], expected: 3 },
  ].forEach(({ grid, expected }) => {
    test(`${JSON.stringify(grid)} -> ${expected}`, () => {
      expect(numIslands(grid)).toEqual(expected);
    });
  });
});
