// 40. Combination Sum
// Difficulty: Medium
// Source: https://leetcode.com/problems/combination-sum-ii/
//
// Description:
// Given a collection of candidate numbers, `candidates`, and a target number, `target`,
// find all unique combinations in `candidates` where the candidate numbers sum to
// `target`.
//
// Each number in `candidates` may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
//
// Clarifying Questions
// * Can the array be empty?
// * Can the array contain negative numbers?
// * Can the array contain duplicates?
// * What is the maximum size of the array?
// * What is the maximum value of the target?
// * Are there any complexity constraings?
// * Can we modify the array?
//
// Constraints:
// * 1 <= candidates.length <= 100
// * 1 <= candidates[i] <= 50
// * 1 <= target <= 30

import removeDuplicates from "./removeDuplicatesFromSortedArray";

// where: n - candidates.length, m - Min(...candidates), t - target
// time: O(n^(t/m))
// space: O(t/m) (ignoring the output)
export default function combinationSum2(candidates: number[], target: number): number[][] {
  // assuming we can modify the array, lets make it optimal
  candidates.sort((a, b) => a - b);
  return combinationSumRecurse(candidates, target, 0);
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

    const result = combinationSumRecurse(candidates, target - candidate, i + 1);
    if (result.length > 0) {
      result.forEach((r) => results.push([candidate, ...r]));
    }
    while (i < candidates.length && candidates[i] === candidates[i + 1]) i++;
  }

  return results;
}
