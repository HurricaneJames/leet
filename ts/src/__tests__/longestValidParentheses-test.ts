import longestValidParentheses from "../longestValidParentheses";

describe("longestValidParentheses", () => {
  [
    { s: "(()", expected: 2 },
    { s: ")()())", expected: 4 },
    { s: "(())(()())((())", expected: 10 },
    { s: "()((())", expected: 4 },
    { s: "", expected: 0 },
  ].forEach(({ s, expected }) => {
    test(`"${s}" -> ${expected}`, () => {
      expect(longestValidParentheses(s)).toBe(expected);
    });
  });
});
