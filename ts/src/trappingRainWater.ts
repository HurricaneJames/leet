// 42. Trapping Rain Water
// Difficulty: Hard
// Source: https://leetcode.com/problems/trapping-rain-water/
//
// Description:
// Given `n` non-negative integers representing an elevation map where the width of each
// bar is `1`, compute how much water it is able to trap after raining.
//
// Clarifying Questions:
// * What is the max size of the array?
// * What is the max value of each element in the array?
// * What if the array is empty?
// * What if the array only has one element? (assume 0)
// * Is there a complexity target?
//
// Constraints
// * 0 <= n <= 2 * 10^4
// * 0 <= height[i] <= 10^5

// Solution:
// Put all heights into a max-heap priority queue. Pop off the first two elements, and
// calculate the area.

// Complexity:
// time: O(n)
// space: O(1)
export default function trap(height: number[]): number {
  if (!height || height.length == 0) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < leftMax) {
        water += leftMax - height[left];
      } else {
        leftMax = height[left];
      }
      left++;
    } else {
      if (height[right] < rightMax) {
        water += rightMax - height[right];
      } else {
        rightMax = height[right];
      }
      right--;
    }
  }

  return water;
}
