import countAndSay from "../countAndSay";

describe("countAndSay", () => {
  [
    { n: 1, expected: "1" },
    { n: 2, expected: "11" },
    { n: 3, expected: "21" },
    { n: 4, expected: "1211" },
    { n: 5, expected: "111221" },
    { n: 6, expected: "312211" },
    { n: 7, expected: "13112221" },
    { n: 8, expected: "1113213211" },
    { n: 9, expected: "31131211131221" },
  ].forEach(({ n, expected }) => {
    test(`${n} -> ${expected}`, () => {
      expect(countAndSay(n)).toEqual(expected);
    });
  });
});
