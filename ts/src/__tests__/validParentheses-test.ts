import isValid from "../validParentheses";

describe("validParentheses", () => {
  [
    { s: "()", expected: true },
    { s: "()[]{}", expected: true },
    { s: "(]", expected: false },
    { s: "((()))", expected: true },
    { s: "((({{}})))", expected: true },
    { s: "((()(){()}))", expected: true },
    { s: "(", expected: false },
    { s: "([]", expected: false },
  ].forEach(({ s, expected }) => {
    it(`"${s}" => ${expected}`, () => {
      expect(isValid(s)).toBe(expected);
    });
  });
});
