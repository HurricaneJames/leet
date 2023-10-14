// Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

// followup - can you solve without converting int to string

export default function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  const original = x;

  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return reversed === original;

  // or do it with powers of 10 and comparing individual digits the same as if it was
  // converted to a string first...
  // let l = 0;
  // let r = Math.floor(Math.log10(x));
  // while (l < r) {
  //   const rightDigit = Math.floor(x % Math.pow(10, l + 1) / Math.pow(10, l));
  //   const leftDigit = Math.floor(x / Math.pow(10, r)) % 10;
  //   // console.log("%o: [%o, %o] / [%o, %o]", x, l, r, leftDigit, rightDigit);
  //   if (leftDigit !== rightDigit) return false;
  //   l++;
  //   r--;
  // }
  // return true;
}
