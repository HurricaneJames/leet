import { tab } from "./integerToRoman";

type ROMAN_TO_INT_MAP = { [id: string]: number };
const map = tab.reduce<ROMAN_TO_INT_MAP>((memo, { v, r }) => {
  memo[r] = v;
  return memo;
}, {});
export default function romanToInt(s: string): number {
  if (s.length === 0) return 0;
  let result = 0;
  let i = 0;
  let twoLetterVal: number | undefined = undefined;
  while (i < s.length) {
    if (s.length > 1 && (twoLetterVal = map[s.slice(i, i + 2)])) {
      result += twoLetterVal;
      i += 2;
    } else {
      result += map[s[i]];
      i++;
    }
  }

  return result;
}
