import generateParentheses from "../generateParentheses";

describe("generateParentheses", () => {
  [
    { n: 1, expected: ["()"] },
    { n: 2, expected: ["(())", "()()"] },
    { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
    { n: 4, expected: ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] },
  ].forEach(({ n, expected }) => {
    it(`n: ${n} -> [${expected}]`, () => {
      const result = generateParentheses(n);
      // expect(result.length).toBe(expected.length);
      expected.forEach(e => expect(result).toContain(e));
    });
  });
});
