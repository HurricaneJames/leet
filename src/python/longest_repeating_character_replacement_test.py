# 424. Longest Repeating Character Replacement
# Difficulty: Medium
# Source: https://leetcode.com/problems/longest-repeating-character-replacement/
#
# Description:
# You are given a string `s` and an integer `k`. You can choose any character of the
# string and change it to any other uppercase English character. You can perform this
# operation at most `k` times.
# Return the length of the longest substring containing the same letter you can get after
# performing the above operations.
#
# Claifying Questions:
#
# Constraints:
# * `1 <= s.length <= 10^5`
# * `s` consists of only uppercase English letters.
# * `0 <= k <= s.length`
#
# Solution Discussion:
# O(n) time, O(n) space solution keeps a freqency count of every character in the string
# The trick is that we know a substring is acceptable so long as the max frequency of the
# characters in the substring is withing k of the length of the substring. (ie. we only
# need to replace substring - k characters to make it all the same character).


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        best = 0
        left = 0
        charCounts = {}
        max_f = 0
        for right in range(len(s)):
            charCounts[s[right]] = 1 + charCounts.get(s[right], 0)
            max_f = max(max_f, charCounts[s[right]])
            while (right - left + 1) - max_f > k:
                charCounts[s[left]] -= 1
                left += 1
            best = max(best, right - left + 1)
        return best

    # this is the generic O(26n) version of the algorithm
    # it is possible to make it more efficient by not capturing the actual window, instead
    # only updating max_f when we have a new max_f. This works because the window length
    # does not change, thus best isn't changing, unless max_f gets bigger.
    # However, it is super unintuitive and not something I thought of at all.
    def characterReplacementGeneric(self, s: str, k: int) -> int:
        best = 0
        left = 0
        charCounts = {}
        for right in range(len(s)):
            charCounts[s[right]] = 1 + charCounts.get(s[right], 0)
            max_f = max(charCounts.values())
            while (right - left + 1) - max_f > k:
                charCounts[s[left]] -= 1
                left += 1
                max_f = max(charCounts.values())
            best = max(best, right - left + 1)
        return best


# Tests
import pytest


@pytest.mark.parametrize(
    "s, k, expected",
    [
        ("ABAB", 2, 4),
        ("AABABBA", 1, 4),
    ],
)
def test_character_replacement(s, k, expected):
    assert Solution().characterReplacement(s, k) == expected
