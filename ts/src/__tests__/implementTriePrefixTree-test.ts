import Trie from "../implementTriePrefixTree";

describe("implementTriePrefixTree", () => {
  [
    {
      operation: ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
      param: [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
      expected: [null, null, true, false, true, null, true],
    },
  ].forEach(({ operation, param, expected }) => {
    test(`${JSON.stringify(operation)} => ${JSON.stringify(expected)}`, () => {
      let trie: Trie | null = null;
      for (let i = 0; i < operation.length; i++) {
        switch (operation[i]) {
          case "Trie":
            trie = new Trie();
            break;
          case "insert":
            param[i].forEach((word: string) => trie?.insert(word));
            break;
          case "search":
            expect(trie?.search(param[i][0])).toEqual(expected[i]);
            break;
          case "startsWith":
            expect(trie?.startsWith(param[i][0])).toEqual(expected[i]);
            break;
          default:
            throw new Error(`Unsupported operation: ${operation[i]}`);
        }
      }
    });
  });
});
