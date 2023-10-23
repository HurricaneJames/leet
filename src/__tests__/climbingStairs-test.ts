import climbStairs from "../climbingStairs";

describe("climbingStairs", () => {
  [
    { n: 1, result: 1 },
    { n: 2, result: 2 },
    { n: 3, result: 3 },
    { n: 4, result: 5 },
  ].forEach(({ n, result }) => {
    test(`${n} -> ${result}`, () => {
      expect(climbStairs(n)).toEqual(result);
    });
  });
});
