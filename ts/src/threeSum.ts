// Given an integer array `nums`, return all the triplets
// `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`,
// and `nums[i] + nums[j] + nums[k] == 0`.
//
// Notice that the solution set must not contain duplicate triplets.

export default function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let out: number[][] = [];
  let i = 0;
  while (i < nums.length - 2) {
    let j = i + 1,
      k = nums.length - 1;
    const target = -nums[i];
    while (j < k) {
      const current2Sum = nums[j] + nums[k];
      if (current2Sum === target) {
        out.push([nums[i], nums[j], nums[k]]);
        // advance both because anything with the same i/j or i/k is
        // going to be a duplicate by definition
        j = nextNumPastDuplicates(nums, 1, j);
        k = nextNumPastDuplicates(nums, -1, k);
      } else if (current2Sum > target) {
        // move right in because moving left is just going to make the sum bigger
        k = nextNumPastDuplicates(nums, -1, k);
      } else {
        // move left because moving right is just going to make the sum smaller
        j = nextNumPastDuplicates(nums, 1, j);
      }
    }
    i = nextNumPastDuplicates(nums, 1, i);
  }
  return out;
}

// TODO - make direciton an enum for better readability
function nextNumPastDuplicates(
  nums: number[],
  direction: -1 | 1,
  i: number
): number {
  let j = i + direction;
  while (j > 0 && j < nums.length && nums[i] === nums[j]) j += direction;
  return j;
}

// obviously this is the wrong solution, but at least it works and we can use it to validate
// potential examples. It is O(n^4) time and O(1) space (O(n) space if considering the return).
function threeSumBruteForce(nums: number[]): number[][] {
  function arrayEqual(a: number[], b: number[]): boolean {
    return a.join(",") === b.join(",");
  }
  const sums: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const token = [nums[i], nums[j], nums[k]].sort();
          if (sums.findIndex((v) => arrayEqual(v, token)) < 0) sums.push(token);
        }
      }
    }
  }
  console.log("nums: ", nums);
  console.log("    result: ", sums);
  return sums;
}
