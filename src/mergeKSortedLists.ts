
type LNode = {
  value: number,
  next: LNode | null,
}

function mergeKSortedLists(listsX: LNode[]): LNode {
  if (listsX.length === 0) throw new Error("Invalid input");

  const lists: (LNode | null)[] = [...listsX];
  // without a heap
  const output: LNode = lNode(0); // going to discard this one anyway
  let head: LNode = output;
  let cleared = 0;
  // time: O(m) // where m is total number of elements
  while (cleared < listsX.length) {
    let minValue = Number.MAX_VALUE;
    let minValueIndices: number[] = [];
    // time: O(n)
    // space: O(n)
    lists.forEach((l, idx) => {
      if (l === null) return;
      if (l.value < minValue) {
        minValue = l.value;
        minValueIndices = [idx];
      } else if (l.value === minValue) {
        minValueIndices.push(idx);
      }
    });
    // push those indices on the output list
    const toRemove = [];
    // O(n)
    minValueIndices.forEach(idx => {
      const node = lists[idx]!;
      head.next = lNode(node.value)
      head = head.next;
      lists[idx] = node.next
      if (node.next === null) cleared++;
    });
  }
  // O(m * 2n) => O(mn)
  return output.next!;
}

const example = [
  [0, 4, 5],
  [1, 3, 4],
  [2, 6],
];
const expectedResult = [0, 1, 2, 3, 4, 4, 5, 6];
function lNode(value: number): LNode {
  return { value, next: null };
}
function convertToList(values: number[]): LNode {
  if (values.length === 0) throw new Error("Invalid Input");
  const head = lNode(values[0]);
  let tail = head;
  for (let i = 1; i < values.length; i++) {
    tail.next = lNode(values[i]);
    tail = tail.next;
  }
  return head;
}
function convertToArray(list: LNode): number[] {
  const arr: number[] = []
  let n = list;
  arr.push(n.value);
  while (n.next !== null) {
    n = n.next;
    arr.push(n.value);
  }
  return arr;
}

function areListsSame(left: LNode | null, right: LNode | null): boolean {
  if (left === null && right === null) return true;
  if (left?.value !== right?.value) return false;
  return areListsSame(left?.next ?? null, right?.next ?? null);
}

function main() {
  const exampleLists = example.map(lv => convertToList(lv));
  const result = mergeKSortedLists(exampleLists);

  console.log('example: ', example);
  console.log('result: ', convertToArray(result));
  console.log('expect: ', expectedResult);
  console.log('valid: ', areListsSame(result, convertToList(expectedResult)));
}
main();