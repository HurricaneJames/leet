# 11. Container with Most Water
# Difficulty: Medium
# Source: https://leetcode.com/problems/container-with-most-water/
#
# Description:
# You are givan an integer array `height` of length `n`. There are `n` vertical lines
# drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.
# Find two lines that together with the x-axis for a container, such that the container
# contains the most water.
# Return the maximum area of the container.
# Notice that you may not slant the container.
#
# Claifying Questions:
# * what if there is no solution? (ie height is empty)
# * what is the range of len(height)?
# * what is the range of height[i]?
#
# Constraints:
# * `n == height.length`
# * `2 <= n <= 10^5`
# * `0 <= height[i] <= 10^4`
#
# Solution Discussion:
# Brute force: O(n^2) try all pairs, probably fast enough with only 100k elements, but we
# can do better.
#
# Sliding Window
# Notice that the area of the container can only get bigger if we move the the pointer of
# the shorter line. The bigger line could be part of the next best container, but the
# smaller could not, its value is already maximized by the wider container.
# So we start with the widest container, and move the pointers in, taking the biggest
# option each time.
#
# Complexity:
# Time: O(n), we only consider each element once
# Space: O(1)

from typing import List


class Solution:
    def maxArea(self, height: List[int]) -> int:
        best = 0
        left = 0
        right = len(height) - 1
        while left < right:
            best = max(best, min(height[left], height[right]) * (right - left))
            if height[left] <= height[right]:
                left += 1
            else:
                right -= 1
        return best


# Tests
import pytest


@pytest.mark.parametrize(
    "height, expected",
    [
        ([0, 1], 0),
        ([1, 1], 1),
        ([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
    ],
)
def test_max_area(height, expected):
    assert Solution().maxArea(height) == expected
