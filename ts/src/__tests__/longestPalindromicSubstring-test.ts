import longestPalindrome, { isSubstringAPalindrome } from "../longestPalindromicSubstring";

describe("longestPalindromicSubstring", () => {
  const examples = [
    { input: "", expected: "" },
    { input: "aba", expected: "aba" },
    { input: "babad", expected: "bab" },
    { input: "abba", expected: "abba" },
    { input: "cbbd", expected: "bb" },
    { input: "cbbdbba", expected: "bbdbb" },
  ];
  examples.forEach(({ input, expected }, idx) => {
    it(`${idx}: ${input} -> ${expected}`, () => {
      expect(longestPalindrome(input)).toBe(expected);
    });
  });
});
describe("isSubstringAPalindrom", () => {
  const examples = [
    { input: "a", expected: true },
    { input: "aa", expected: true },
    { input: "aba", expected: true },
    { input: "abba", expected: true },
    { input: "abcba", expected: true },
    { input: "ab", expected: false },
    { input: "abb", expected: false },
    { input: "abc", expected: false },
  ];
  examples.forEach(({ input, expected }, idx) => {
    it(`${idx}: wholeString(${input}) => ${expected}`, () => {
      expect(isSubstringAPalindrome(input, 0, input.length - 1)).toBe(expected);
    });
  });

  [
    { s: "abcdefgfedcba", i: 3, j: 9, expected: true },
    { s: "abcabcbabb", i: 3, j: 7, expected: true },
    { s: "abcba", i: 0, j: 3, expected: false },
  ].forEach(({ s, i, j, expected }, idx) => {
    it(`${idx}: substring(${s}, ${i}, ${j}) => ${expected}`, () => {
      expect(isSubstringAPalindrome(s, i, j)).toBe(expected);
    });
  });
});
