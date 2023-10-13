// Given a string s, return the longest palindromic substring in s.

// two approaches
// 1: check each possible substring, can optimize by starting with the max size and going
// down, but this is still O(n^3) worst case
// 2: expand the largest palindrom from each char O(n^2)

// perf: O(n^2) / space: O(1) or O(n) if counting slice at end
export default function longestPalindrome(s: string): string {
  // console.log(`longestPalindrome('${s}')`);
  if (s.length <= 1) return s;
  let maxLen = 0;
  let maxSubStr = [0, 0]

  // going to length - 1 because the last character will never be the palindrome
  // plus we won't need to check if i+1 is in the array
  for (let i=0; i<s.length-1; i++) {
    const odd = expandToLargestPalindrome(s, i, i);
    const even = expandToLargestPalindrome(s, i, i+1);
    const biggestWindow = odd[1] - odd[0] > even[1] - even[0]
      ? odd : even;
    const windowLength = biggestWindow[1] - biggestWindow[0];
    // console.log(`${i}: '${s.slice(odd[0], odd[1] + 1)}' or '${s.slice(even[0], even[1] + 1)}' vs ${s.slice(maxSubStr[0], maxSubStr[1] + 1)}`, odd, even, windowLength, maxLen);
    if (windowLength > maxLen) {
      maxSubStr = biggestWindow;
      maxLen = windowLength;
    }
  }
  return s.slice(maxSubStr[0], maxSubStr[1] + 1);
}

// perf: O(n) / space: O(1)
function expandToLargestPalindrome(s: string, left: number, right: number): [number, number] {
  const maxRight = s.length - 1;
  let ret: [number, number] = [left, left]
  while (left >= 0 && right <= maxRight && s[left] === s[right]) {
    const pLen = right - left;
    ret = [left, right];
    left--;
    right++;
  }
  return ret;
}


// perf: O(n^2)
// space: O(1)
function longestPalindromeByCheckingAll(s: string): string {
  // console.log(`longestPalindrome(${s})`);
  for (let substrLen = s.length; substrLen > 0; substrLen--) {
    for (let i = 0; i < s.length - substrLen; i++) {
      const j = i + substrLen;
      const x = isSubstringAPalindrome(s, i, j);
      const subs = s.slice(i, j+1);
      // console.log(`(${i}, ${j}) ${subs} -> `, x);
      if (x) return subs;
    }
  }
  return "";
}

// perf: O(j-i)
// space: O(1)
export function isSubstringAPalindrome(
  s: string,
  i: number,
  j: number
): boolean {
  if (i > j || i < 0 || j < 0 || i >= s.length || j >= s.length) return false;
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}

// n
// 2(n-1)
// 3(n-2)
// 4(n-3)
// E(i(n-(i-1))) as i in [0, n)