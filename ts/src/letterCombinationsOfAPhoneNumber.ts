// Given a string containing digits from `2-9` inclusive, return all possible letter combinations
// that the number could represent. Return the answer in *any order.*
//
// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that
// 1 does not map to any letters.
//
// 1 - []
// 2 - [a, b, c]
// 3 - [d, e, f]
// 4 - [g, h, i]
// 5 - [j, k, l]
// 6 - [m, n, o]
// 7 - [p, q, r, s]
// 8 - [t, u, v]
// 9 - [w, x, y, z]

export default function letterCombinations(digits: string): string[] {
  if (digits === "") return [];

  // we are allowed to assume valid input, but we could add some input validation here
  const combinations = digits.split('').reduce<string[] | null>((results, digit) => {
    if (results === null) return digitsToLetters[digit];
    return results.flatMap(result => digitsToLetters[digit].map(letter => result + letter));
  }, null)
  if (combinations === null) throw new Error('Something went wrong');
  return combinations;
};

const digitsToLetters: {[id: string]: string[]} = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
}
