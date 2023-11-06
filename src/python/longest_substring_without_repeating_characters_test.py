# 3. Longest Substring Without Repeating Characters
# Difficulty: Medium
# Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
#
# Description:
# Given a string `s`, find the length of the **longest substring** without repeating
# characters.
#
# Claifying Questions:
# * what is the max lenght of the string?
# * what is the character set of the string?
#
# Constraints:
# * `0 <= s.length <= 5 * 10^4`
# * `s` consists of English letters, digits, symbols and spaces.
#
# Solution Discussion:
# Brute force approach would be to compare all pairs, O(n^2) time O(1) space
#     For memory constrained systems, this might actually be the better approach since is
#     only uses O(1) space and we can make the average case a bit better by stopping pairs
#     as soon as we find a duplicate. Sill O(n^2) time, but better than worst case.
# Sliding window approach:
# Use a set to keep track of characters we have already seen (we could do this with an
# array of booleans too, since we are told the string consists of a specific charset).
# Whenever we come across a character we have already seen, we remove characters from the
# left until we no longer have that character in our set.
# At which point we can add it back in and keep going to the right.
# At every step, we check if we have a longer substring than our current best.
# We could also keep a record of the indicies whenver we change the best value if we want
# to get the actual longest substring (or at least one of them).
#
# Complexity:
# O(n) time, O(n) space


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        best = 0
        left = 0
        charSet = set()
        for right in range(len(s)):
            while s[right] in charSet:
                charSet.remove(s[left])
                left += 1
            charSet.add(s[right])
            best = max(best, right - left + 1)
        return best


# Tests
import pytest


@pytest.mark.parametrize(
    "s, expected",
    [
        ("abcabcbb", 3),
        ("bbbbb", 1),
        ("pwwkew", 3),
        ("", 0),
        (" ", 1),
        ("au", 2),
        ("dvdf", 3),
    ],
)
def test_length_of_longest_substring(s, expected):
    assert Solution().lengthOfLongestSubstring(s) == expected
