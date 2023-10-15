// Given an array `nums` of `n` integers, return an array of all the unique k-tuples
// `[nums[a], nums[b], nums[c], nums[d], ... , nums[k]]` such that:
//   * 0 <= a, b, c, d, ... k < n
//   * a, b, c, d, ..., k are distinct
//   * nums[a] + nums[b] + nums[c] + nums[d]  + ... + nums[k] == target
// you may return the answer in any order

// This is an extension of the 2-sum, 3-sum, and 4-sum questions. At this point,
// we should bethinking about k-sum.
// Note: beware performance, as time complexity is going to be O(n^k-1)

export default function kSum(
  nums: number[],
  k: number,
  target: number
): number[][] {
  if (nums.length < k)
    throw new Error(
      `Cannot return ${k} elements from an array with only ${nums.length} elements.`
    );

  // sort the array ascending
  nums.sort((a, b) => a - b);

  return subKSum(nums, k, target, 0, 4);
}

// search a sorted sub-array of nums starting at i, looking for k elements that sum to target
// @param current the current elements of the exploratory set
// return all such unique k-tuples of elements
function subKSum(
  nums: number[],
  kth: number,
  target: number,
  startIndex: number,
  spaces: number
): number[][] {
  if (kth === 2) return twoSum(nums, target, startIndex, spaces);

  let output: number[][] = [];
  const max = nums.length - kth + 1;
  for (let i = startIndex; i < max; i++) {
    subKSum(nums, kth - 1, target - nums[i], i + 1, spaces + 4).forEach(
      (solution) => {
        output.push([nums[i], ...solution]);
      }
    );
    if (nums[i] === nums[i + 1]) {
      const oldI = i;
      while (i < max && nums[i] === nums[i + 1]) i++;
    }
  }
  return output;
}

// nums - the array of numbers to sum
// target - the target to sum to
// startIndex - the lowest index in the array to search
function twoSum(
  nums: number[],
  target: number,
  startIndex: number,
  spaces: number
): number[][] {
  let output: number[][] = [];
  let i = startIndex;
  let j = nums.length - 1;
  while (i < j) {
    const sum = nums[i] + nums[j];
    if (sum === target) {
      output.push([nums[i], nums[j]]);
      while (i < j && nums[i] === nums[i + 1]) i++;
      while (i < j && nums[j] === nums[j + 1]) j--;
      i++;
      j--;
    } else if (sum < target) {
      while (i < j && nums[i] === nums[i + 1]) i++;
      i++;
    } else {
      while (i < j && nums[j] === nums[j - 1]) j--;
      j--;
    }
  }
  return output;
}
