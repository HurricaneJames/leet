import wordSearch from "../wordSearch";

describe("wordSearch", () => {
  [
    {
      board: [
        ["a", "b"],
        ["c", "d"],
      ],
      word: "abdc",
      result: true,
    },
    {
      board: [
        ["a", "b"],
        ["c", "d"],
      ],
      word: "abcd",
      result: false,
    },
    {
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      word: "ABCCED",
      result: true,
    },
    {
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      word: "SEE",
      result: true,
    },
    {
      board: [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      word: "ABCB",
      result: false,
    },
  ].forEach(({ board, word, result }) => {
    test(`${JSON.stringify(board)} ${word} -> ${result}`, () => {
      expect(wordSearch(board, word)).toEqual(result);
    });
  });
});
