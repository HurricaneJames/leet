
export const tab = [
  { v: 1000, r: 'M' },
  { v: 900, r: 'CM' },
  { v: 500, r: 'D' },
  { v: 400, r: 'CD' },
  { v: 100, r: 'C' },
  { v: 90, r: 'XC' },
  { v: 50, r: 'L' },
  { v: 40, r: 'XL' },
  { v: 10, r: 'X' },
  { v: 9, r: 'IX' },
  { v: 5, r: 'V' },
  { v: 4, r: 'IV' },
  { v: 1, r: 'I' },
]
// O(n) - n = number of digits (log10(num))
// space - O(n) because the result string needs to be built and returned
export default function intToRoman(num: number): string {
  let result = '';
  tab.forEach(({v, r}) => {
    const count = Math.floor(num / v);
    num -= count * v;
    result = result + r.repeat(count);
    // while (num >= v) {

    //   result = result + r;
    //   num -= v;
    // }
  });
  return result;
}