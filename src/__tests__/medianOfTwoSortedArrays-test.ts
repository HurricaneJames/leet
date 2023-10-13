import medianOfTwoSortedArrays from "../medianOfTwoSortedArrays";

describe("medianOfTwoSortedArrays", () => {
  const examples = [
    { a1: [1, 3], a2: [2], expected: 2.0 },
    { a1: [1, 2], a2: [3, 4], expected: 2.5 },
    { a1: [1, 2, 3, 4, 5, 6], a2: [7, 8], expected: 4.5 },
  ];
  examples.forEach(({ a1, a2, expected }, idx) => {
    it(`${idx} => ${expected}`, () => {
      expect(medianOfTwoSortedArrays(a1, a2)).toBe(expected);
    });
  });
});
