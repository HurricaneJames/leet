// 29. Divide Two Integers
// [Medium]
//
// Given two integers dividend and divisor, divide two integers without using multiplication, division,
// and mod operator.
//
// The integer division should truncate toward zero, which means losing its fractional part. For
// example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
//
// Return the quotient after dividing dividend by divisor.
//
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit
// signed integer range: [−2^31, 2^31 − 1]. For this problem, if the quotient is strictly greater than
// 2^31 - 1, then return 2^31 - 1, and if the quotient is strictly less than -231, then return -231.

export default function divide(dividend: number, divisor: number): number {
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) {
    if (dividend > -2147483648) return -dividend;
    return 2147483647;
  }
  let i = 0;
  let count = 0;
  // note: these could overflow if dividend or divisor === -2147483648
  //       I'm going to assume this is alright because in a real case,
  //       where the int is actually constrained, we could use unsigned
  //       int (all ops are positive at this point).
  let d = dividend < 0 ? -dividend : dividend;
  let s = divisor < 0 ? -divisor : divisor;
  while (i <= d) {
    i += s;
    count++;
  }

  return dividend < 0 === divisor < 0 ? count - 1 : -(count - 1);
}
