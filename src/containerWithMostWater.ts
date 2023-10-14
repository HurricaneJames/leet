// You are given an integer array `height` of length `n`. There are `n` vertical lines
// drawn such that the two endpoints of the `ith` line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container
// contains the most water.
//
// Return the maximum amount of water a container can store.
//
// Notice: that you may not slant the container.

import { get } from "http";

export default function maxArea(height: number[]): number {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  // O(n) - advance the window each time only taking potentially larger volumes`
  // ie. the only way to get a bigger volume is to give up on the smaller height
  while (i < j) {
    const area = getArea(height, i, j);
    if (area > max) max = area;
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;

  // O(n^2) - brute force compare everything
  // for (let i = 0; i < height.length; i++) {
  //   for (let j = i; j < height.length; j++) {
  //     const a = getArea(height, i, j);
  //     if (a > max) max = a;
  //   }
  // }
  // return max;
}

function getArea(height: number[], i: number, j: number): number {
  return Math.abs(j - i) * Math.min(height[i], height[j]);
}
