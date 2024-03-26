import trap from "../trappingRainWater";

describe("trappingRainWater", () => {
  [
    { height: [], expected: 0 },
    { height: [1], expected: 0 },
    { height: [1, 2], expected: 0 },
    { height: [2, 1], expected: 0 },
    { height: [1, 2, 3], expected: 0 },
    { height: [3, 2, 1], expected: 0 },
    { height: [2, 0, 2], expected: 2 },
    { height: [2, 1, 1, 2], expected: 2 },
    { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], expected: 6 },
    { height: [1, 2, 1, 2, 3, 1, 0, 1, 2, 0, 1, 0], expected: 6 },
    { height: [1, 2, 1, 3, 2, 1, 0, 1, 2, 0, 1, 0], expected: 6 },
    { height: [4, 2, 0, 3, 2, 5], expected: 9 },
    { height: [4, 2, 3], expected: 1 },
    { height: [0, 7, 1, 4, 6], expected: 7 },
    { height: [2, 1, 1, 2, 2, 1, 1, 2], expected: 4 },
  ].forEach(({ height, expected }) => {
    test(`${JSON.stringify(height)} -> ${expected}`, () => {
      expect(trap(height)).toEqual(expected);
    });
  });
});
