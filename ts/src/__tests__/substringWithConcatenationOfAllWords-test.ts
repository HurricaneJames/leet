import findSubstring from "../substringWithConcatenationOfAllWords";

describe("substringWithConcatenationOfAllWords", () => {
  [
    { s: "barfoothefoobarman", words: ["foo", "bar"], expected: [0, 9] },
    {
      s: "wordgoodgoodgoodbestword",
      words: ["word", "good", "best", "word"],
      expected: [],
    },
    {
      s: "barfoofoobarthefoobarman",
      words: ["bar", "foo", "the"],
      expected: [6, 9, 12],
    },
    {
      s: "wordgoodgoodgoodbestword",
      words: ["word", "good", "best", "good"],
      expected: [8],
    },
    {
      s: 'bcabbcaabbccacacbabccacaababcbb',
      words: ["c","b","a","c","a","a","a","b","c"],
      expected: [6, 16, 17, 18, 19, 20],
    }
  ].forEach(({ s, words, expected }) => {
    it(`${s}, ${JSON.stringify(words)}) === ${JSON.stringify(expected)}`, () => {
      const result = findSubstring(s, words);
      expected.forEach(e => expect(result).toContain(e));
      expect(result.length).toEqual(expected.length);
    });
  });
});
