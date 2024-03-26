# 76. Minimum Window Substring
# Difficulty: Hard
# Source: https://leetcode.com/problems/minimum-window-substring/
#
# Description:
# Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum
# window substring of `s` such that every character in `t` (including duplicates) is
# included in the window. If there is no such substring, return the empty string `""`.
# The testcases will be generated such that the answer is unique.
#
# Claifying Questions:
# * what is the range of len(s) and len(t)?
#
# Constraints:
# * `m == s.length`
# * `n == t.length`
# * `1 <= m, n <= 10^5`
# * `s` and `t` consist of uppercase and lowercase English letters.
#
# Solution Discussion:
#
# Complexity
#


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""
        if len(t) > len(s):
            return ""
        countT = {}
        window = {}
        for c in t:
            countT[c] = 1 + countT.get(c, 0)
            window[c] = 0

        have, need = 0, len(countT)
        result, resLen = [-1, -1], float("infinity")
        l = 0
        for r in range(len(s)):
            c = s[r]
            if c in countT:
                window[c] += 1
                if window[c] == countT[c]:
                    have += 1
            while have == need:
                if (r - l + 1) < resLen:
                    result = [l, r]
                    resLen = r - l + 1
                if s[l] in countT:
                    window[s[l]] -= 1
                    if window[s[l]] < countT[s[l]]:
                        have -= 1
                l += 1
        l, r = result
        return s[l : r + 1] if resLen != float("infinity") else ""


# Tests
import pytest


@pytest.mark.parametrize(
    "s, t, expected",
    [
        ("ADOBECODEBANC", "ABC", "BANC"),
        ("a", "a", "a"),
        ("a", "aa", ""),
    ],
)
def test_min_window(s, t, expected):
    assert Solution().minWindow(s, t) == expected
