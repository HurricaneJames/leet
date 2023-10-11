import PriorityQueue from "./utils/PriorityQueue";

type LNode = {
  value: number,
  next: LNode | null,
}

function mergeKSortedLists(lists: LNode[]): LNode {
  // todo - input validation 
  let pq = new PriorityQueue<LNode>();
  let head = lNode(0);
  let cur = head;

  // k - number of arrays | n - total number of elements in all arrays
  // O(k log(k))
  lists.forEach(list => {
    pq.enqueue(list, list.value)
  });
  // O(n log(k))
  while (pq.hasNext()) {
    const next = pq.dequeue()!;
    cur.next = lNode(next.value);
    cur = cur.next;
    if (next.next != null) {
      pq.enqueue(next.next, next.next.value);
    }
  }

  // total: O((n+k) log(k))
  // space: O(n + k) - because we do not modify the original lists
  //    could do it in O(k) space if we are willing to modify the original 
  return head.next!;
}

function mergeKSortedListsWithoutHeap(listsX: LNode[]): LNode {
  if (listsX.length === 0) throw new Error("Invalid input");

  const lists: (LNode | null)[] = [...listsX];
  // without a heap
  const output: LNode = lNode(0); // going to discard this one anyway
  let head: LNode = output;
  let cleared = 0;
  // time: O(n) // where m is total number of elements
  while (cleared < listsX.length) {
    let minValue = Number.MAX_VALUE;
    let minValueIndices: number[] = [];
    // time: O(k)
    // space: O(k)
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
    // O(k)
    minValueIndices.forEach(idx => {
      const node = lists[idx]!;
      head.next = lNode(node.value)
      head = head.next;
      lists[idx] = node.next
      if (node.next === null) cleared++;
    });
  }
  // O(n * 2k) => O(nk)
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
  console.log('result: ', result);

  console.log('example: ', example);
  console.log('result: ', convertToArray(result));
  console.log('expect: ', expectedResult);
  console.log('valid: ', areListsSame(result, convertToList(expectedResult)));
}
main();