// 30. Substring with Concatenation of All Words
// Difficulty: Hard
// You are given a string s and an array of strings words. All the strings of words are
// of the same length.
// A concatenated substring in s is a substring that contains all the strings of any
// permutation of words concatenated.
// * For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab",
//   "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated
//   substring because it is not the concatenation of any permutation of words.
// Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

// performance: n - s.lengtj, k - words.length, m - words[0].length
// time: O(n * k * m) / space: O(k)
export default function findSubstring(s: string, words: string[]): number[] {
  const results: number[] = [];
  const wordCount = words.length;
  const wordLength = words[0].length;
  const phraseLength = wordCount * wordLength;

  // O(k) - generate a frequency table for target words
  const wordFreq = new Map<string, number>();
  words.forEach((word) => wordFreq.set(word, (wordFreq.get(word) ?? 0) + 1));

  // O(n) * O(n/m) * O(mk) = O(n * n/m * mk) = O(n^2 * k)
  for (let i = 0; i < wordLength; i++) {
    // essentially break the entire string into workLength substrings starting at i
    // then check those tokens for matches using a sliding window.
    let left = i;
    let right = i;
    let counts = new Map<string, number>();

    // O(n/m) - number of tokens
    while (right < s.length - i) {
      // while we can make another token
      // O(m)
      const token = s.substring(right, right + wordLength);

      // O(1)
      if (!wordFreq.get(token)) {
        // not a combination, restart
        counts.clear();
        left = right + wordLength;
        right = left;
        continue;
      }

      // O(mk) time total for if and else
      if (wordFreq.get(token)! > (counts.get(token) ?? 0)) {
        // O(1)
        // we can consume the token
        counts.set(token, (counts.get(token) ?? 0) + 1);
        right += wordLength;
      } else {
        // we already have enough of that token, advance left pointer
        // until we are either pass the a previous copy of the token
        // or are at the right pointer
        let leftToken = s.substring(left, left + wordLength); // O(m)
        // O(k)
        while (leftToken !== token) {
          left += wordLength;
          counts.set(leftToken, counts.get(leftToken)! - 1);
          leftToken = s.substring(left, left + wordLength); // O(m)
        }
        counts.set(leftToken, counts.get(leftToken)! - 1);
        left += wordLength;
      }

      // if total count of tokens is equal to wordCount, we have a match
      // right is first character of next token after phrase, so
      // right - left = length of collected tokens
      if (right - left === phraseLength) {
        results.push(left);
      }

      // note: if, at any point, right > s.length - wordLength * wordCount, we can stop
    }
  }

  return results;
}

// this is fast enough for leet code, but ~20x slower than the sliding window solution above
// time: O(n * k * m) / space: O(k)
function findSubstringGood(s: string, words: string[]): number[] {
  const results: number[] = [];
  const wordCount = words.length;
  const wordLength = words[0].length;

  // O(k)
  const wordHash = words.reduce<{ [id: string]: number }>((acc, word) => {
    acc[word] = (acc[word] ?? 0) + 1;
    return acc;
  }, {});

  // O(n)
  for (let i = 0; i < s.length; i++) {
    const token = s.slice(i, i + wordLength);
    const found = wordHash[token];
    if (found !== undefined) {
      let foundCount = 1;
      const counts = { ...wordHash };
      counts[token]--;
      // O(k)
      while (foundCount < wordCount) {
        // O(m)
        const nextToken = s.slice(
          i + wordLength * foundCount,
          i + wordLength * foundCount + wordLength
        );
        // O(1)
        if (wordHash[nextToken] !== undefined && counts[nextToken] > 0) {
          foundCount++;
          counts[nextToken]--;
        } else {
          break;
        }
      }
      // O(1)
      if (foundCount === wordCount) {
        results.push(i);
      }
    }
  }
  return results;
}
