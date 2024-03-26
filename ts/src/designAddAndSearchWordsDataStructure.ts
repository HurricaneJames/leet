// 211. Design Add and Search Words Data Structure
// Difficulty: Medium
// Source: https://leetcode.com/problems/design-add-and-search-words-data-structure/
//
// Description:
// Design a data structure that supports adding new words and finding if a string matches
// any previously added string.
// Implement the `WordDictionary` class:
// * `WordDictionary()` Initializes the object.
// * `void addWord(word)` Adds `word` to the data structure, it can be matched later.
// * `bool search(word)` Returns `true` if there is any string in the data structure that
//   matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots match
//   any letter.

export default class WordDictionary {
  value: string;
  isTerminating: boolean = false;
  children: Map<string, WordDictionary> = new Map();

  constructor(value: string = "") {
    this.value = value;
  }

  // Time: O(n), Space: O(n)
  addWord(word: string): void {
    let current: WordDictionary = this;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children.has(char)) {
        current.children.set(char, new WordDictionary(char));
      }
      current = current.children.get(char)!;
    }
    current.isTerminating = true;
  }

  // Time: O(nm), Space: O(n)
  // where n is the length of the word and m is the number of nodes in the dict
  search(word: string): boolean {
    if (!word) return this.isTerminating;
    if (word[0] === ".") {
      for (const child of this.children.values()) {
        if (child.search(word.slice(1))) return true;
      }
      return false;
    }
    if (!this.children.has(word[0])) return false;
    return this.children.get(word[0])!.search(word.slice(1));
    // note: could potentially remove some recursion by doing a loop in this method
    // instead of calling search recursively for every character. That way we only
    // recurse in case of a wildcard. It would be a very minor speed improvement in some
    // cases. I'm not sure if it's worth the tradeoff in readability.
  }
}
