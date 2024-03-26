// Given an integer array `num` of length `n` and an integer `target`, find three
// integers in `nums` such that the sum is closest to `target`.
//
// Return the sum of the three integers.
//
// You may assume that each input would have exactly one solution.

// option 1: compare all possible elements, O(N^3)
// option 2: use a sliding window O(n^2)

export default function threeSumClosest(
  nums: number[],
  target: number
): number {
  if (nums.length < 3) throw new Error("invalid input");

  nums.sort((a, b) => a - b); // sort in increasing order

  let closestSoFar = nums[0] + nums[1] + nums[2];
  let minDistance = Math.abs(target - closestSoFar);
  
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === target) return sum;

      const diff = Math.abs(target - sum);
      if (diff < minDistance) {
        closestSoFar = sum;
        minDistance = diff;
      }

      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return closestSoFar;
}
