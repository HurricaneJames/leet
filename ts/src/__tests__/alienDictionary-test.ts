import alienDictionary from "../alienDictionary";

describe("alienDictionary", () => {
  [
    { dict: ["abc", "ab"], output: "" },
    { dict: [], output: "" },
    { dict: ["z", "x"], output: "zx" },
    { dict: ["ab", "bb", "ba"], output: "" },
    { dict: ["ab", "aa", "ba"], output: "" },
    { dict: ["wrt", "wrf", "er", "ett", "rftt"], output: "wertf" },
    { dict: ["wrt", "wrf", "er", "ett", "rftt", "rftg", "rftf"], output: "wertgf" },
  ].forEach(({ dict, output }) => {
    test(`${JSON.stringify(dict)} -> ${JSON.stringify(output)}`, () => {
      expect(alienDictionary(dict)).toEqual(output);
    });
  });
});
