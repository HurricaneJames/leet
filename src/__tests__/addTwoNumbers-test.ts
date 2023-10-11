import addTwoNumbers, {listNumber, Digit, ListNumber} from "../addTwoNumbers";

describe("addTwoNumbers", () => {
  const examples = [
    {
      a: [2, 4, 3],
      b: [5, 6, 4],
      e: 807,
    },
    {
      a: [0],
      b: [0, 0, 1],
      e: 100,
    },
    {
      a: [1, 2, 3],
      b: [9, 7, 6],
      e: 1000,
    },
    {
      a: [0],
      b: [0],
      e: 0,
    },
    {
      a: [9,9,9,9,9,9,9],
      b: [9,9,9,9],
      e: 10009998,
    }
  ];
  examples.forEach(({a, b, e}, idx) => {
    it(`should handle example ${idx}: ${arrayToNumber(a)} + ${arrayToNumber(b)} = ${e}`, () => {
      expect(listToNumber(addTwoNumbers(arrayToList(a), arrayToList(b)))).toEqual(e);
    });
  });
  it('should convert to a number', () => {
    expect(listToNumber(arrayToList([0]))).toBe(0);
    expect(listToNumber(arrayToList([0, 1, 1]))).toBe(110);
  })
});

function arrayToNumber(arr: number[]): number {
  return parseInt([...arr].reverse().join(''), 10);
}
function arrayToList(arr: number[]): ListNumber {
  if (arr.length === 0) throw new Error('Invalid array');
  let head = listNumber(0);
  let cur = head;
  arr.forEach(i => {
    cur.next = listNumber(i as Digit)
    cur = cur.next;
  });
  return head.next!;
}

function listToNumber(list: ListNumber): number {
  let n = 0;
  let cur: ListNumber | null = list;
  let result = 0;
  while(cur !== null) {
    result += Math.pow(10, n++) * cur.digit;
    cur = cur.next;
  }
  return result;
}