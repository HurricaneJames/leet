# 212. Word Search II
# Difficulty: Hard
# Source: https://leetcode.com/problems/word-search-ii/
#
# Description:
# Given a `m x n` `board` of characters and a list of strings, `words`, return all words
# on the board.
# Each word must be constructed from letters of sequentially adjacent cells, where
# adjacent cells are horizontally or vertically neighboring. The same letter cell may not
# be used more than once in a word.
#
# Clarifying Questions:
# * What are the maximum dimensions of the board?
# * What are the maximum number of words?
# * What are the maximum length of the words?
# * What are the possible characters in the board?
# * What are the possible characters in the words?
# * Are any characters in the set equivalent to others, and do we need to worry about that?
# * Where is this going to be used? (ie. is this the optimal function for us to build?)
# * Are there any complexity requirements?
#
# Constraints:
# * 'l == Math.max(words[i].length)'
# * `m == board.length`
# * `n == board[i].length`
# * `1 <= m, n <= 12`
# * `board[i][j]` is a lowercase English letter.
# * `1 <= words.length <= 3 * 10^4`
# * `1 <= words[i].length <= 10`
# * `words[i]` consists of lowercase English letters.
# * All the strings of `words` are unique.
#
# Solution Discussion:
# 

from typing import List

class TrieNode:
    def __init__(self):
        self.children = {}
        self.isTerminating = False

    def addWord(self, word):
        cur = self
        for char in word:
            if char not in cur.children:
                cur.children[char] = TrieNode()
            cur = cur.children[char]
        cur.isTerminating = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = TrieNode()
        for word in words:
            trie.addWord(word)

        rows = len(board)
        cols = len(board[0])
        results = []
        visit = set()

        def dfs(row: int, col: int, node: TrieNode, word: str):
            if (
                row < 0 or row >= rows or
                col < 0 or col >= cols or
                board[row][col] not in node.children or
                (row, col) in visit
            ):
                return
            
            visit.add((row, col))
            
            node = node.children[board[row][col]]
            word += board[row][col]
            if (node.isTerminating):
                results.append(word)
                node.isTerminating = False
            dfs(row-1, col, node, word)
            dfs(row+1, col, node, word)
            dfs(row, col-1, node, word)
            dfs(row, col+1, node, word)

            visit.remove((row, col))
        
        for row in range(rows):
            for col in range(cols):
                dfs(row, col, trie, "")
        
        return results


# Tests
import pytest
@pytest.mark.parametrize("board, words, expected", [
    (
      [
        ["a", "b"],
        ["c", "d"],
      ],
      ["abcb"],
      [],
    ),
    (
      [
        ["o", "a", "a", "n"],
        ["e", "t", "a", "e"],
        ["i", "h", "k", "r"],
        ["i", "f", "l", "v"],
      ],
      ["oath", "pea", "eat", "rain"],
      ["eat", "oath"],
    ),
    (
        [["a", "a"]],
        ["aaa"],
        [],
    )
])
def test_find_words(board, words, expected):
    result = Solution().findWords(board, words)
    assert len(result) == len(expected)
    assert set(result) == set(expected)
