// 39. Combination and Sum
// Difficulty: Medium
// Source: https://leetcode.com/problems/combination-sum/
//
// Description:
// Given an array of distinct integers, `candidates`, and a target integer, `target`,
// return a list of all unique combinations of `candidates` where teh chosen numbers sum
// to `target`. You may return the combinations in any order.
//
// The same number may be chosedn from `candidates` an unlimited number of times. Two
// combinations are unique if the frequency of at least one of the chosen numbers is
// different.
//
// The test case are generated such that the number of unique combinations that sum up to
// `target` is less than `150` combinations for the given input.
//
// Clarifying Quesitons:
// * Can the array be empty?
// * Can the array contain negative numbers?
// * Can the array contain duplicates?
// * What is the maximum size of the array?
// * What is the maximum value of the target?
// * What is the minimum value of the target?
// * What is the maximum value of the array?
// * What is the minimum value of the array?
// * Can I modify the array?
// * Is the array in sorted order?ß

import removeDuplicates from "./removeDuplicatesFromSortedArray";

// time: O(n^(t/m))
//   - at each level of the tree we are doing n things, and each of those things takes
//     O(t/m) time
// space: O(n + t/m) (ignoring the output)
//   - the height of the tree is t/m, and at each level we are storing an array of size
//     but we combine that list as we go up, so we do not take more than O(t/m) space
//   - the n comes from the array slice we do (could update the recursive algorithm to
//     accept a length as well, but this was easier for an example)
// where:
//   n - candidates.length
//   m - Min(...candidates)
//   t - target
export default function combinationSum(candidates: number[], target: number): number[][] {
  // assuming we can modify the array, lets make it optimal
  candidates.sort((a, b) => a - b);
  const length = removeDuplicates(candidates);

  return combinationSumRecurse(candidates.slice(0, length), target, 0);
}

function combinationSumRecurse(candidates: number[], target: number, start: number): number[][] {
  if (target === 0) return [];

  const results: number[][] = [];
  for (let i = start; i < candidates.length; i++) {
    const candidate = candidates[i];
    if (candidate > target) break;
    if (candidate === target) {
      results.push([candidate]);
      break;
    }

    const result = combinationSumRecurse(candidates, target - candidate, i);
    if (result.length > 0) {
      result.forEach((r) => results.push([candidate, ...r]));
    }
  }

  return results;
}
