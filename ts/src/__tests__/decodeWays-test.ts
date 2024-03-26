import numDecodings from "../decodeWays";

describe("decodeWays", () => {
  [
    { s: "", expected: 1 },
    { s: "0", expected: 0 },
    { s: "1", expected: 1 },
    { s: "12", expected: 2 },
    { s: "226", expected: 3 },
    { s: "06", expected: 0 },
    { s: "1101", expected: 1 },
    { s: "1901", expected: 0 },
  ].forEach(({ s, expected }) => {
    test(`${s} -> ${expected}`, () => {
      expect(numDecodings(s)).toEqual(expected);
    });
  });
});
