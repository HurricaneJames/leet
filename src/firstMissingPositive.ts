// 41. First Missing Positive
// Difficulty: Hard
// Source: https://leetcode.com/problems/first-missing-positive/
//
// Description:
// Given an unsorted integer array, `nums`, find the smallest missing positive integer.
// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
//
// Clarififying Questions:
// * Can the array contain negative numbers?
// * What is the max length of the array?
// * What is the min length of the array? (can it be empty?)
// * Can the array contain duplicates?
// * What is the max/min value of the array?
// * What is the purpose of this function? (ie. where will it be used and why)
// * can we modify the array
//
// Constraints
// * 1 <= nums.length <= 10 ^ 5
// * -2^31 <= nums[i] <= 2^31 - 1

// Solutions:
// Generally: we know 1 <= solution <= nums.length + 1
// 1. We could sort the array then walk until we find the first missing positive integer.
//    This would be O(n*log(n)) time and O(1) space.
// 2. We could create a hash table from nums and then go from i=0 to nums.lenth + 1 and
//    see if that number is in the hash table. If not, we have the solution. This would
//    use O(n) space and O(n) time.
// 3. If we can modify the array, we can reuse it as a kind of hash table. First, remove
//    all negative numbers (make them 0). Then walk the array and set the value at index
//    i - 1 to negative. If i-1 is out of bounds, ignore it. If i-1 is 0, make it
//    -(n.length + 1) (ie. if we hit that number later in the walk we will ignore it.)
//    Finally, do the solution from a2. For i = 0 to length-1, if nums[i] is positive,
//    return i. Default return length + 1 (since everything else was found in our map.)
//    This would be O(n) time and O(1) space.

export default function firstMissingPositive(nums: number[]): number {
  if (nums.length === 0) return 1;
  if (nums.length === 1) return nums[0] === 1 ? 2 : 1;

  // remove negative numbers
  for (let i = 0; i < nums.length; i++) if (nums[i] < 0) nums[i] = 0;
  // mark found solutions negative
  for (let i = 0; i < nums.length; i++) {
    let target = Math.abs(nums[i]) - 1;
    if (target >= 0 && target < nums.length && nums[target] >= 0) {
      nums[target] = nums[target] === 0 ? -(nums.length + 1) : -nums[target];
    }
  }
  for (let i = 0; i < nums.length; i++) if (nums[i] >= 0) return i + 1;
  return nums.length + 1;
}
