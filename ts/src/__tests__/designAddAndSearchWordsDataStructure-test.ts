import WordDictionary from "../designAddAndSearchWordsDataStructure";

describe("designAddAndSearchWordsDataStructure", () => {
  [
    {
      operation: [
        "WordDictionary",
        "addWord",
        "addWord",
        "addWord",
        "search",
        "search",
        "search",
        "search",
      ],
      param: [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]],
      expected: [null, null, null, null, false, true, true, true],
    },
  ].forEach(({ operation, param, expected }) => {
    test(`${JSON.stringify(operation)} => ${JSON.stringify(expected)}`, () => {
      let dict: WordDictionary | null = null;
      for (let i = 0; i < operation.length; i++) {
        switch (operation[i]) {
          case "WordDictionary":
            dict = new WordDictionary();
            break;
          case "addWord":
            param[i].forEach((word: string) => dict?.addWord(word));
            break;
          case "search":
            expect(dict?.search(param[i][0])).toEqual(expected[i]);
            break;
          default:
            throw new Error(`Unsupported operation: ${operation[i]}`);
        }
      }
    });
  });
});
