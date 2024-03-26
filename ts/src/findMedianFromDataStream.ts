// 295. Find Median from Data Stream
// Difficulty: Hard
// Source: https://leetcode.com/problems/find-median-from-data-stream/
//
// Description:
// The median is the middle value in an ordered integer list. If the size of the list is
// even, there is no middle value, and the median is the mean of the two middle values.
// * For example, for arr = [2,3,4], the median is 3.
// * For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:
// * MedianFinder() initializes the MedianFinder object.
// * void addNum(int num) adds the integer num from the data stream to the data structure.
// * double findMedian() returns the median of all elements so far. Answers within 10^-5
//   of the actual answer will be accepted.
//
// Clarifying Questions:
// * What is the maximum number of elements that can be added?
// * What is the maximum value of an element?
// * What is the minimum value of an element?
// * What is the maximum number of times findMedian will be called?
// * What is the maximum number of times addNum will be called?
// * What do we return if findMedian is called before addNum?
//
// Constraints:
// * -10^5 <= num <= 10^5
// * There will be at least one element in the data structure before calling findMedian.
// * At most 5 * 10^4 calls will be made to addNum and findMedian.
//
// Follow-up:
// * If all integer numbers from the stream are in the range [0, 100], how would you solution?
// * If 99% of all integer numbers from the stream are in the range [0, 100], how would
//   you optimize your solution?

import MaxHeap from "./utils/MaxHeap";
import MinHeap from "./utils/MinHeap";

export default class MedianFinder {
  smallerHalf: MaxHeap = new MaxHeap();
  largerHalf: MinHeap = new MinHeap();

  constructor() {}

  // @complexity O(log(n)) time / O(n) space
  addNum(num: number): void {
    // O(log(n)) time / O(n) space
    if (this.smallerHalf.values.length <= this.largerHalf.values.length) {
      this.smallerHalf.add(num);
    } else {
      this.largerHalf.add(num);
    }

    // O(log(n)) time / O(1) space
    if (this.smallerHalf.values[0] > this.largerHalf.values[0]) {
      const temp = this.largerHalf.pop()!;
      this.largerHalf.add(this.smallerHalf.pop()!);
      this.smallerHalf.add(temp);
    }
  }

  // complexity O(1) time / O(1) space
  findMedian(): number {
    if (this.smallerHalf.values.length === this.largerHalf.values.length) {
      return (this.smallerHalf.values[0] + this.largerHalf.values[0]) / 2;
    } else if (this.smallerHalf.values.length > this.largerHalf.values.length) {
      return this.smallerHalf.values[0];
    } else {
      return this.largerHalf.values[0];
    }
  }
}
