// 212. Word Search II
// Difficulty: Hard
// Source: https://leetcode.com/problems/word-search-ii/
//
// Description:
// Given a `m x n` `board` of characters and a list of strings, `words`, return all words
// on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where
// adjacent cells are horizontally or vertically neighboring. The same letter cell may not
// be used more than once in a word.
//
// Clarifying Questions:
// * What are the maximum dimensions of the board?
// * What are the maximum number of words?
// * What are the maximum length of the words?
// * What are the possible characters in the board?
// * What are the possible characters in the words?
// * Are any characters in the set equivalent to others, and do we need to worry about that?
// * Where is this going to be used? (ie. is this the optimal function for us to build?)
// * Are there any complexity requirements?
//
// Constraints:
// * 'l == Math.max(words[i].length)'
// * `m == board.length`
// * `n == board[i].length`
// * `1 <= m, n <= 12`
// * `board[i][j]` is a lowercase English letter.
// * `1 <= words.length <= 3 * 10^4`
// * `1 <= words[i].length <= 10`
// * `words[i]` consists of lowercase English letters.
// * All the strings of `words` are unique.

type Trie = {
  val: string;
  word: number;
  children: Map<String, Trie>;
};

// Complexity:
// time - O(mn * 4^l)
// space - O(mn + l)

export default function findWords(board: string[][], words: string[]): string[] {
  let result: string[] = [];

  // O(mn) time / O(mn) space
  const visited = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(false));
  // O(1) time / O(l) space
  const trie = newTrie("");

  // O(l) time / O(l) space
  words.forEach((word, idx) => insert(trie, word, idx));

  // O(4^l) time / O(l) space (recurse stack & paths as we recurse)
  const dfs = (row: number, col: number, node: Trie) => {
    if (node.word !== -1) {
      result.push(words[node.word]);
      node.word = -1;
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
    if (visited[row][col]) return;

    const char = board[row][col];
    if (!node.children.has(char)) return;

    visited[row][col] = true;
    const nextNode = node.children.get(char)!;
    dfs(row - 1, col, nextNode);
    dfs(row + 1, col, nextNode);
    dfs(row, col - 1, nextNode);
    dfs(row, col + 1, nextNode);
    visited[row][col] = false;
  };

  // O(mn * 4^l) time / O(mn + l) space
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(row, col, trie);
    }
  }

  return result;
}

function insert(trie: Trie, word: string, wordIdx: number): void {
  let current: Trie = trie;
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    if (!current.children.has(char)) {
      current.children.set(char, newTrie(char));
    }
    current = current.children.get(char)!;
  }
  current.word = wordIdx;
}

function newTrie(val: string): Trie {
  return { val, word: -1, children: new Map<String, Trie>() };
}
