// 322. Coin Change
// Difficulty: Medium
// Source: https://leetcode.com/problems/coin-change/
//
// Description:
// You are given an integer array `coins` representing coins of different denominations
// and an integer `amount` representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount
// of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.
//
// Clarifying Questions:
// Can coins be negative?
// What is the range of coins.length?
// What is the range of amount?
// Are coins sorted? If so, ascending or descending?
// Can we have a 0 value coin?
// ~Can coins, or amount, be fractional?~ - no, integers -
//
// Constraints:
// * 1 <= coins.length <= 12
// * 1 <= coins[i] <= 2^31 - 1
// * 0 <= amount <= 10^4
//
// Solution Discussion:
// We can use recursion
// for each of the coins, take the minimum of coinChange(coins, amount - coin) + 1
// this would be O(n^m) time complexity
// use dynamic programming to memoize the results and avoid repeating calculations
// this would be O(n*m) time complexity
//
// Complexity:
// O(mn) time / O(m) space
// n = coins.length
// m = amount
// We could remove the sort, and have the same overall a slightly lower complexity, but
// then we could not preempt the search if we know the remaining coins are too big.

export default function coinChange(coins: number[], amount: number): number {
  // O(m) space
  const dp = new Array(amount + 1);

  // we want the ascending order, where the smallest coin is first
  // that way we can break off during the search if further coins are too big
  // O(n * long(n)) time / O(1) space
  // coins.sort((a, b) => a - b);

  // O(n) time
  dp[0] = 0;
  // for each amount starting a 0 and working our way up to the target amount
  // O(m) * O(n) => O(mn) time / O(1) space
  for (let i = 1; i < dp.length; i++) {
    let min = Infinity;
    // O(n) time / O(1) space
    for (const coin of coins) {
      // no more coins could work (sorted), cut of the pointles work
      // if (i - coin < 0) break;
      if (i - coin < 0) continue;

      // Unless we allow negative value coins, i-coin will always be smaller than i. We
      // already checked that it cannot be negative. Therefore, since we are computing
      // every value from dp[0] to dp[amount], we know the dp value for i-coin has already
      // been computed and we can use it.
      // That means we want to take the minimum of whatever we already found and using
      // this coin.
      min = Math.min(min, dp[i - coin] + 1);
    }
    dp[i] = min;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}
