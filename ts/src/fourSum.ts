// Given an array `nums` of `n` integers, return an array of all the unique quadruplets
// `[nums[a], nums[b], nums[c], nums[d]]` such that:
//   * 0 <= a, b, c, d < n
//   * a, b, c, and d are distinct
//   * nums[a] + nums[b] + nums[c] + nums[d] == target
// you may return the answer in any order

export default function fourSum(nums: number[], target: number): number[][] {
  // sort the array ascending
  nums.sort((a, b) => a - b);

  let output: number[][] = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (sum === target) {
          output.push([nums[i], nums[j], nums[k], nums[l]]);
          while (k < l && nums[k] === nums[k + 1]) k++;
          while (k < l && nums[l] === nums[l - 1]) l--;
          k++;
          l--;
        } else if (sum < target) {
          while (k < l && nums[k] === nums[k + 1]) k++;
          k++;
        } else {
          while (k < l && nums[l] === nums[l - 1]) l--;
          l--;
        }
      }

      // deal with repeats in j
      if (nums[j] === nums[j + 1]) {
        while (j < nums.length - 2 && nums[j] === nums[j + 1]) j++;
      }
    }
    if (nums[i] === nums[i + 1]) {
      while (i < nums.length - 3 && nums[i] === nums[i + 1]) i++;
    }
  }

  return output;
}
