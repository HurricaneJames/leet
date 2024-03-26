
// O(n) time / O(n) space
export default function longestSubstringWithoutRepeatingCharacters(
  s: string
): number {
  let i = 0;
  let max = 1;
  const seen: { [id: string]: number } = {};
  seen[s[i]] = i;

  // O(n)
  for (let j = 1; j < s.length; j++) {
    if (seen[s[j]] != null) {
      max = Math.max(max, j - i);
      i = seen[s[j]] + 1;
    }
    seen[s[j]] = j;
  }

  return Math.max(max, s.length - i);
}

// O(n^2) - where n = s.length
// space: O(n^2) - (creating lots of string slices while recursing down the string,
// the s.slices in the for loop are not concurrent)
function longestSubstringWithoutRepeatingCharactersNaive(s: string): number {
  // start at current, go until I find dup of current
  // then check second character up to that first dup
  // then check third character up to that dup point
  // finally, advance and do the same, but starting at second character
  // this is a terrible algorithm... must be a better way

  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    const x = longestSubstringWithout(s.slice(i), new Set());
    longest = Math.max(x, longest);
  }

  // for each character
  return longest;
}

// O(n) - where n = s.length
function longestSubstringWithout(s: string, without: Set<string>): number {
  if (s.length === 0) return 0;
  if (without.has(s[0])) return 0;
  return 1 + longestSubstringWithout(s.slice(1), without.add(s[0]));
}
