import wordBreak from "../wordBreak";

describe("wordBreak", () => {
  [
    { s: "leetcode", wordDict: ["leet", "code"], output: true },
    { s: "applepenapple", wordDict: ["apple", "pen"], output: true },
    { s: "catsandog", wordDict: ["cats", "dog", "sand", "and", "cat"], output: false },
  ].forEach(({ s, wordDict, output }) => {
    test(`${s}, ${JSON.stringify(wordDict)} -> ${output}`, () => {
      expect(wordBreak(s, wordDict)).toEqual(output);
    });
  });
});
