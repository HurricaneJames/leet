// Implement the `myAtoi(string s)` function, which converts a string to a 32-bit
// signed integer (similar to C/C++'s `atoi` function).
//
// The algorithm for myAtoi(string s) is as follows:

// 1. Read in and ignore any leading whitespace.
// 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read
//    this character in if it is either. This determines if the final result is negative or positive
//    respectively. Assume the result is positive if neither is present.
// 3. Read in next the characters until the next non-digit character or the end of the input is
//    reached. The rest of the string is ignored.
// 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read,
//    then the integer is 0. Change the sign as necessary (from step 2).
// 5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the
//    integer so that it remains in the range. Specifically, integers less than -2^31 should be
//    clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.
// 6. Return the integer as the final result.
//
// Note:
// * Only the space character ' ' is considered a whitespace character.
// * Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

// perf: O(n) / space: O(1)
// each digit is considered sequentially, and not gone back over

const MAX_INT = 2147483647; // Math.pow(2, 31) - 1;
const MIN_INT = -2147483648; // -Math.pow(2, 31);
const MAX_INT_O10 = 214748364; // Math.floor(MAX_INT / 10);
export default function myAtoi(s: string): number {
  let result = 0;
  let i = 0;
  while (s[i] === " ") i++;
  const isNegative = s[i] === "-";
  if (isNegative || s[i] === "+") i++;

  // myParseInt
  for (; i < s.length; i++) {
    let digit = getDigit(s, i);
    if (Number.isNaN(digit)) return (isNegative ? -1 : 1) * result;
    
    if (result > MAX_INT_O10) {
      return isNegative ? MIN_INT : MAX_INT;
    } else if (isNegative && result === MAX_INT_O10 && digit > 8) {
      return MIN_INT;
    } else if (!isNegative && result === MAX_INT_O10 && digit > 7) {
      return MAX_INT;
    }
    result = result * 10 + digit;
  }

  // could use parseInt, but that violates the spirit of this exercise
  // return (isNegative ? -1 : 1) * parseInt(digits, 10);
  return (isNegative ? -1 : 1) * result;
}

function getDigit(s: string, n: number): number {
  if (n >= s.length) throw new Error(`Invalid digit ${n} on ${s}.`);
  switch (s[n]) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;
    case "4":
      return 4;
    case "5":
      return 5;
    case "6":
      return 6;
    case "7":
      return 7;
    case "8":
      return 8;
    case "9":
      return 9;
  }
  return NaN;
}
