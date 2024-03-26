// 208. Implement Trie (Prefix Tree)
// Difficulty: Medium
// Source: https://leetcode.com/problems/implement-trie-prefix-tree/
//
// Description:
// A trie (pronounced as "try") or prefix tree is a tree data structure used to
// efficiently store and retrieve keys in a dataset of strings. There are various
// applications of this data structure, such as autocomplete and spellchecker.
//
// Implement the Trie class:
// * Trie() Initializes the trie object.
// * void insert(String word) Inserts the string word into the trie.
// * boolean search(String word) Returns true if the string word is in the trie (i.e. was
//   inserted before), and false otherwise.
// * boolean startsWith(String prefix) Returns true if there is a previously inserted
//   string word that has the prefix prefix, and false otherwise.
//
// Clarifying Questions:
// * what character set do we support?
// * what is the maximum length of a word?
//
// Constraints
// * 1 <= word.length, prefix.length <= 2000
// * word and prefix consist only of lowercase English letters.
// * At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

export default class Trie {
  value: string = "";
  isTerminating: boolean = false;
  children: { [key: string]: Trie } = {};

  constructor(value: string = "") {
    this.value = value;
  }

  insert(word: string): void {
    if (!word) {
      this.isTerminating = true;
      return;
    }

    const firstChar = word[0];
    if (!this.children[firstChar]) {
      this.children[firstChar] = new Trie(firstChar);
    }
    this.children[firstChar].insert(word.slice(1));
  }

  search(word: string): boolean {
    if (!word) return this.isTerminating;
    if (!this.children[word[0]]) return false;
    return this.children[word[0]].search(word.slice(1));
  }

  startsWith(prefix: string): boolean {
    if (!prefix) return true;
    if (!this.children[prefix[0]]) return false;
    return this.children[prefix[0]].startsWith(prefix.slice(1));
  }
}
