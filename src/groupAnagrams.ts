// 49. Group Anagrams
// Difficulty: Medium
// Source: https://leetcode.com/problems/group-anagrams/
//
// Description:
// Given an array of strings `strs`, group the anagrams together. You can return the
// answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or
// phrase, typically using all the original letters exactly once.
//
// Claifying Questions:
// * what if we have no strings in strs?
// * what is the range of strs.length?
// * what is the range of str[i].length?
// * what character sets are we looking at?
// * If we use non english characters, are some characters equivalent for anagram purposes?
// * any time/space complexity constraints we need to consider up front?
//
// Constraints:
// * `1 <= strs.length <= 10^4`
// * `0 <= strs[i].length <= 100`
// * `strs[i]` consists of lowercase English letters.
//
// Solution Description:
// Build a unique key for each anagram and use that key to keep a record of all the words
// that match that key. Then, return those sets.
// I'm sorting the characters of each string to build the key. This is O(mlog(m)). We also
// could have build a frequency map for each string, and serialized that map to create the
// key. That would be O(m), and thus better for lage values of m. However, the constant is
// higher, and for values around 100 characters, sorting actually works out to be slightly
// faster in JS/TS.
//
// Complexity
// O(nmlog(m)) time, O(nm) space
// * n - strs.length ~ 10^4
// * m - strs[i].length ~ 100

export default function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();
  // O(n)
  strs.forEach((str) => {
    // O(mlog(m))
    const key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(str);
  });
  const result = Array.from(map.values());
  return result;
}
