// 1. Two Sum
// Difficulty: Easy
// Source: https://leetcode.com/problems/two-sum/
//
// Description:
// Given an array of integers `nums` and an integer `target`, return indices of the two
// numbers such that they add up to `target`.
// You may assume that each input would have exactly one solution, and you may not use
// the same element twice.
// You can return the answer in any order.
//
// Claifying Questions:
// * what if there is no solution?
// * can nums be negative?
// * can target be negative?
// * can there be duplicates in nums? (ie. does cannot use the same element refer to the
//   index of the element or the value of the element?)
//
// Constraints:
// * `2 <= nums.length <= 10^4`
// * `-10^9 <= nums[i] <= 10^9`
// * `-10^9 <= target <= 10^9`
// * **Only one valid answer exists.**
//
// Follow up: Can you come up with an algorithm that is less than `O(n^2)` time
//
// Solution:
// * Brute force: compare all possible pairs, O(n^2) time, O(1) space
// * hash map: add all elements to a hash map, then iterate through each one and see if
//   the required pair is there and return if it is, O(n) time, O(n) space
//
// Complexity:
//

export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const diff = target - num;
    // seen the required diff value before, so we know we have a pair that works
    if (map.has(diff)) return [map.get(diff)!, i];
    map.set(num, i);
  }
  throw new Error("no valid solution");
}

// This was my initial solution, it can be improvied by not pre-storing the map. We do not
// really need to pre-store the map because we only care if a pair exists. If we check if
// the number was seen previously, then we know it exists, even if it was a duplicate
// value.
function twoSumInitial(nums: number[], target: number): number[] {
  // map[key] = indicies in nums that have the value of key
  const map = new Map<number, number[]>();
  nums.forEach((num, i) => {
    if (!map.has(num)) map.set(num, []);
    map.get(num)!.push(i);
  });

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      const indicies = map.get(diff)!;
      if (num === diff) {
        if (indicies.length > 1) return indicies.slice(0, 2);
      } else {
        return [i, indicies[0]];
      }
    }
  }
  throw new Error("not in problem specification");
}
