// signed 32-bit integers in range
// [-2,147,483,648, 2,147,483,647]

// since most typescript environments have > 32bit integers, and we have to assume 32-bit integers
// and that the environment does not allow larger, we will clip with these two arrays
const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = -Math.pow(2, 31);

const MAX_INT_O10 = Math.trunc(MAX_INT / 10);
const MIN_INT_O10 = Math.trunc(MIN_INT / 10);

// perf: O(n) / space: O(1) - where n is number of digits (or log10(x))
export default function reverse(x: number): number {
  let result = 0;
  while (x != 0) {
    const rightDigit = x % 10;
    x = Math.trunc(x/10);
    result = result * 10 + rightDigit;
    if (result > MAX_INT_O10) return 0;
    if (result < MIN_INT_O10) return 0;
  }
  return result;
}

// time: O(n) / space: O(n) - where n is number of digits
const BIGGEST_POS = `${MAX_INT}`.split('');
const BIGGEST_NEG = `${-MIN_INT}`.split('');
export function reverseWithStrings(x: number): number {
  let isNegative = x < 0;
  const result = `${x}`.split('').reverse();
  if (isNegative) result.pop();

  // clip the result if necessary
  if (result.length === 10) {
    const compare = isNegative ? BIGGEST_NEG : BIGGEST_POS;
    for (let i=0; i<10; i++) {
      if (result[i] > compare[i]) return 0;
      if (result[i] < compare[i]) break;
    }
  }

  return parseInt((isNegative ? '-' : '') + result.join(''), 10);
}
