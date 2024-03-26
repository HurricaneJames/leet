import zigzagConversion from "../zigzagConversion";

describe("zigzagConversion", () => {
  [
    { s: "PAYPALISHIRING", rows: 3, expected: "PAHNAPLSIIGYIR" },
    { s: "PAYPALISHIRING", rows: 4, expected: "PINALSIGYAHRPI" },
  ].forEach(({ s, rows, expected }, idx) => {
    it(`${idx}: ${s} over ${rows} rows => ${expected}`, () => {
      expect(zigzagConversion(s, rows)).toBe(expected);
    });
  });
});
