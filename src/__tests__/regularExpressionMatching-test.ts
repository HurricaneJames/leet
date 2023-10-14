import isMatch from "../regularExpressionMatching";

describe("regularExpressionMatching", () => {
  [
    { s: "aa", p: "a", expected: false },
    { s: "aa", p: "a*", expected: true },
    { s: "ab", p: ".*", expected: true },
    { s: 'aaab', p: 'a*ab', expected: true}, 
    { s: "aaabbb", p: "a*bba*b", expected: true },
    { s: "aaabbb", p: "...ba*bb", expected: true },
    { s: "aaabbb", p: "...ba*b", expected: false },
    { s: "aaabbb", p: ".*", expected: true },
    { s: "aaabbb", p: ".*ab.*", expected: true },
    { s: "aaabbb", p: ".*ba.*", expected: false },
    { s: "aaaaaaaaaaaaaaaaab", p: "a*a*a*a*c", expected: false },
  ].forEach(({ s, p, expected }) => {
    it(`${s}, ${p} => ${expected}`, () => {
      expect(isMatch(s, p)).toBe(expected);
    });
  });
});
