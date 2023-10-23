import rob from "./houseRobber2";

describe("houseRobber2", () => {
  [
    { n: [], result: 0 },
    { n: [0], result: 0 },
    { n: [1], result: 1 },
    { n: [1, 2], result: 2 },
    { n: [1, 2, 3], result: 3 },
    { n: [1, 2, 3, 4], result: 6 },
    { n: [1, 2, 3, 4, 5], result: 8 },
  ].forEach(({ n, result }) => {
    test(`${JSON.stringify(n)} => ${result}`, () => {
      expect(rob(n)).toEqual(result);
    });
  });
});
