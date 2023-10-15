import { ListNode } from "./utils/ListNode";
import PriorityQueue from "./utils/PriorityQueue";

export default function mergeKSortedLists(lists: ListNode[]): ListNode {
  // todo - input validation 
  let pq = new PriorityQueue<ListNode>();
  let head = new ListNode(0);
  let cur = head;

  // k - number of arrays | n - total number of elements in all arrays
  // O(k log(k))
  lists.forEach(list => {
    pq.enqueue(list, list.val)
  });
  // O(n log(k))
  while (pq.hasNext()) {
    const next = pq.dequeue()!;
    cur.next = new ListNode(next.val);
    cur = cur.next;
    if (next.next != null) {
      pq.enqueue(next.next, next.next.val);
    }
  }

  // total: O((n+k) log(k))
  // space: O(n + k) - because we do not modify the original lists
  //    could do it in O(k) space if we are willing to modify the original 
  return head.next!;
}

export function mergeKSortedListsWithoutHeap(listsX: ListNode[]): ListNode {
  if (listsX.length === 0) throw new Error("Invalid input");

  const lists: (ListNode | null)[] = [...listsX];
  // without a heap
  const output: ListNode = new ListNode(0); // going to discard this one anyway
  let head: ListNode = output;
  let cleared = 0;
  // time: O(n) // where m is total number of elements
  while (cleared < listsX.length) {
    let minValue = Number.MAX_VALUE;
    let minValueIndices: number[] = [];
    // time: O(k)
    // space: O(k)
    lists.forEach((l, idx) => {
      if (l === null) return;
      if (l.val < minValue) {
        minValue = l.val;
        minValueIndices = [idx];
      } else if (l.val === minValue) {
        minValueIndices.push(idx);
      }
    });
    // push those indices on the output list
    const toRemove = [];
    // O(k)
    minValueIndices.forEach(idx => {
      const node = lists[idx]!;
      head.next = new ListNode(node.val)
      head = head.next;
      lists[idx] = node.next
      if (node.next === null) cleared++;
    });
  }
  // O(n * 2k) => O(nk)
  return output.next!;
}
