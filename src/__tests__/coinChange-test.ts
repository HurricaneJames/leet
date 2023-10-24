import coinChange from "../coinChange";

describe("coinChange", () => {
  [
    { coins: [], amount: 1, output: -1 },
    { coins: [], amount: 0, output: 0 },
    { coins: [1], amount: 0, output: 0 },
    { coins: [2], amount: 3, output: -1 },
    { coins: [1, 2, 5], amount: 11, output: 3 },
    { coins: [1, 5, 10, 14, 25], amount: 28, output: 2 },
  ].forEach(({ coins, amount, output }) => {
    test(`${JSON.stringify(coins)}, ${amount} => ${output}`, () => {
      expect(coinChange(coins, amount)).toEqual(output);
    });
  });
});
