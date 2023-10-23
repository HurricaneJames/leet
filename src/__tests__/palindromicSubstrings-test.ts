import countSubstrings from "../palindromicSubstrings";

describe("palindromicSubstrings", () => {
  [
    { s: "", output: 0 },
    { s: "a", output: 1 },
    { s: "aa", output: 3 },
    { s: "aaa", output: 6 },
    { s: "aab", output: 4 },
    { s: "abc", output: 3 },
  ].forEach(({ s, output }) => {
    test(`${s} -> ${output}`, () => {
      expect(countSubstrings(s)).toEqual(output);
    });
  });
});
