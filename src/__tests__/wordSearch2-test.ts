import findWords from "../wordSearch2";

describe("wordSearch2", () => {
  [
    {
      board: [
        ["a", "b"],
        ["c", "d"],
      ],
      words: ["abcb"],
      output: [],
    },
    {
      board: [
        ["o", "a", "a", "n"],
        ["e", "t", "a", "e"],
        ["i", "h", "k", "r"],
        ["i", "f", "l", "v"],
      ],
      words: ["oath", "pea", "eat", "rain"],
      output: ["eat", "oath"],
    },
  ].forEach(({ board, words, output }) => {
    test(`${JSON.stringify(board)}, ${JSON.stringify(words)} -> ${JSON.stringify(output)}`, () => {
      const result = findWords(board, words);
      expect(result.sort()).toEqual(output.sort());
    });
  });
});
