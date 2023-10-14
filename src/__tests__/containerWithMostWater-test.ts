import maxArea from "../containerWithMostWater";

describe("containerWithMostWater", () => {
  [
    { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
    { height: [1, 2, 3, 4], expected: 4 },
    { height: [1, 1, 100, 100, 1, 1], expected: 100 },
    { height: [100, 1, 1, 1, 100], expected: 400 },
    { height: [100, 1, 1000, 1000, 1, 100], expected: 1000 },
  ].forEach(({ height, expected }) => {
    it(`${height} => ${expected}`, () => {
      expect(maxArea(height)).toBe(expected);
    });
  });
});
