# 347. Top K Frequent Elements
# Difficulty: Medium
# Source: https://leetcode.com/problems/top-k-frequent-elements/
#
# Description:
# Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.
# You may return the answer in **any order**.
#
# Claifying Questions:
# what if nums is empty?
# what if k > len(nums)?
# what if k <= 0?
# what if there are ties?
# what is the possible range of values for len(nums)?
# what is the possible range of values for k?
#
# Constraints:
# `1 <= nums.length <= 10^5`
# `-10^4 <= nums[i] <= 10^4`
# `k` is in the range `[1, the number of unique elements in the array]`
# It is **guaranteed** that the answer is unique.
#
# Follow up:
# Implement a solution with `O(n log n)` time complexity and `O(n)` space complexity.
#
# Solution Discussion:
# We can calculate a frequency map for each number in O(n) time and O(n) space.
# Then, using heapify that frequency map as a priority queue in O(n) time and O(n) space.
# We can then remove k elements at the cost of log(n) time for each removal.
# Total complexity is O(n + klog(n)) time and O(n) space.
# We know that k is no larger than n, so we can simplify this to O(nlog(n)) time and O(n)
# space.

from queue import PriorityQueue
from typing import List

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequency_map = {}
        for num in nums:
            frequency_map[num] = frequency_map.get(num, 0) + 1
        buckets = [[] for _ in range(len(nums) + 1)]
        for (num, freq) in frequency_map.items():
            buckets[freq].append(num)
        result = []
        while len(result) < k:
            result.extend(buckets.pop())
        return result
    

# Tests
import pytest

@pytest.mark.parametrize("nums, k, expected", [
    ([1, 1, 1, 2, 2, 3], 2, [1, 2]),
    ([1], 1, [1]),
])
def test_top_k_frequent(nums, k, expected):
    assert Solution().topKFrequent(nums, k) == expected