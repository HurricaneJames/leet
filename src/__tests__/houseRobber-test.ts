import houseRobber from "../houseRobber";

describe("houseRobber", () => {
  const examples = [
    { houses: [1, 2, 3, 1], expected: 4 },
    { houses: [2, 7, 9, 3, 1], expected: 12 },
    { houses: [0, 0, 0, 1], expected: 1 },
    { houses: [1, 0, 0, 4, 3], expected: 5 },
    { houses: [1, 0, 0, 3, 4], expected: 5 },
  ];
  examples.forEach(({ houses, expected }) => {
    it(`${houses} => ${expected}`, () => {
      expect(houseRobber(houses)).toBe(expected);
    });
  });
});
