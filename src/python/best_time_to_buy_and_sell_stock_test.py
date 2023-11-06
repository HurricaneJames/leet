# 121. Best Time to Buy and Sell Stock
# Difficulty: Easy
# Source: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
#
# Description:
# You are given an array `prices` where `prices[i]` is the price of a given stock on the
# `ith` day.
# You want to maximize your profit by choosing a **single day** to buy one stock and
# choosing a **different day in the future** to sell that stock.
# Return the maximum profit you can achieve from this transaction. If you cannot achieve
# any profit, return `0`.
#
# Claifying Questions:
# can prices be empty?
# can prices contain a single element?
#
# Constraints:
# - `1 <= prices.length <= 10^5`
# - `0 <= prices[i] <= 10^4`
#
# Solution Discussion:
# Brute force, O(n^2) time, O(1) space: compare each pair and keep a record of the largest.
# Sliding Window: keep a left/right pointer, find the largest difference between the
#   lowest currently known point and the highest point until we find a lower point.
#   Then we can move the window to start from that point. We know that any future solution
#   will either use the lower starting point, or be the best we already found.
#
# Complexity:
# O(n) time because we iterate through each element of the array once
# O(1) space because we only store two pointers and a single best variable

from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left, right = 0, 1
        best = 0
        while right < len(prices):
            best = max(best, prices[right] - prices[left])
            if prices[right] < prices[left]:
                left = right
                right = left + 1
            else:
                right += 1

        return best


# Tests
import pytest


@pytest.mark.parametrize(
    "prices, expected",
    [
        ([7, 1, 5, 3, 6, 4], 5),
        ([7, 8, 1, 5, 3, 6, 3, 4], 5),
        ([7, 6, 4, 3, 1], 0),
    ],
)
def test_max_profit(prices, expected):
    assert Solution().maxProfit(prices) == expected
