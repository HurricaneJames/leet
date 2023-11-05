# 919. Meeting Rooms II
# Difficulty: Medium
# Source: https://leetcode.com/problems/meeting-rooms-ii/
#
# Description:
# Given an array of meeting time intervals `intervals` where `intervals[i] = [starti,
# endi]`, return the minimum number of conference rooms required.
#
# Claifying Questions:
# * Can start/end times be negative?
# * Are we guaranteed that starti < endi?
# * Is the end time inclusive or exclusive? (ie. if a meeting ends at 10, can another
#   start at 10?)
#
# Constraints:
# * `1 <= intervals.length <= 10^4`
# * `0 <= starti < endi <= 10^6`
# * `intervals[i]` is sorted by `starti` in **ascending** order.
#
# Solution Discussion:
# Keep track of the number of meetings happening at any given time and return the max of
# those values.
# We do this by keeping two arrays, start and end, that track the start end end times.
# At each point in the loop, we check if the next action is a meeting start or ending.
# Priority is given to meetings ending when there is a tie because another meeting could
# use that room.
# If a meeting is starting, we increment the count of current meetings and move to the
# next start time.
# If a meeting is ending, we decrement the count of current meetings and move to the next
# end time.
#
# Complexity Analysis:
# Time: O(n * log(n)) for sorting the meeting times, everything else is O(n) time
# Space: O(n) for the start/end arrays

from typing import List


class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end


class Solution:
    def min_meeting_rooms(self, intervals: List[Interval]) -> int:
        start = sorted([i.start for i in intervals])
        end = sorted([i.end for i in intervals])
        res, count = 0, 0
        i, j = 0, 0
        print("start: ", start)
        print("end:   ", end)
        while i < len(start):
            # note: we only increment i if it is strictly less than end[j] because any
            #       meetings that end free up a room before a meeting that starts at the
            #       same time.
            if start[i] < end[j]:
                count += 1
                i += 1
            else:
                count -= 1
                j += 1
            res = max(res, count)
        return res


# Tests
import pytest


@pytest.mark.parametrize(
    "intervals, expected",
    [
        ([(0, 1)], 1),
        ([(0, 30), (5, 10), (15, 20)], 2),
        ([(7, 10), (2, 4)], 1),
        ([(13, 15), (1, 13)], 1),
    ],
)
def test_min_meeting_rooms(intervals, expected):
    assert (
        Solution().min_meeting_rooms(
            list(map(lambda x: Interval(x[0], x[1]), intervals))
        )
        == expected
    )
