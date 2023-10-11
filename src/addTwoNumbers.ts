export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// a number is a linked list of ListNumber where 0 -> 1 -> 1 represents 110
export type ListNumber = {
  digit: Digit;
  next: ListNumber | null;
};

export function listNumber(digit: Digit): ListNumber {
  return { digit, next: null };
}

export default function addTwoNumbers(
  a: ListNumber,
  b: ListNumber
): ListNumber {
  const result = listNumber(0);
  let resultCur = result;
  let lCur: ListNumber | null = a;
  let rCur: ListNumber | null = b;
  let carryover = 0;
  // time O(max(n, m)) // or O(n + m) for safety
  // space O(max(n, m) + 1)
  while (lCur !== null || rCur !== null) {
    let l = lCur !== null ? lCur.digit : 0;
    let r = rCur !== null ? rCur.digit : 0;
    const added = l + r + carryover;
    carryover = Math.floor(added / 10);
    resultCur.next = listNumber((added % 10) as Digit);
    resultCur = resultCur.next;
    lCur = lCur ? lCur.next : null;
    rCur = rCur ? rCur.next : null;
  }
  if (carryover > 0) {
    resultCur.next = listNumber(carryover as Digit);
  }
  return result.next!;
}

