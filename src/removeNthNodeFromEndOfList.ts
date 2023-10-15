// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Follow up: Could you do this in one pass?

// m - # nodes in the list
// n - number of nodes from the end of the list

// perf: O(n) - single pass
// space: O(1) - no more circle buffer
export default function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null || !head.next) { return null; }

  let cur = head;
  // this is the parent of the nth node
  let target = head;
  let counter = 1;

  while (cur.next) {
    cur = cur.next;
    if (counter > n) target = target.next!;
    counter++;
  }
  // only way this can happen is if n >= size(list)
  // since we assume valid input, head must be the target
  // to remove
  if (counter <= n) return head.next

  // remove the desired node
  target.next = target.next?.next ?? null;
  return head;
}

// perf: O(m) - single pass
// space: O(n) - we keep a buffer
function removeNthFromEndWithCircleBuffer(
  head: ListNode | null,
  n: number
): ListNode | null {
  // we could do some validation, like what if n > list.length
  if (head === null || !head.next) return null;

  let buf = new Array(n + 1);
  buf[0] = head;
  let i = 1;
  let cur: ListNode | null = head;
  do {
    cur = cur!.next;
    buf[i] = cur;
    i = (i + 1) % (n + 1);
  } while (cur?.next)
  const nodeToChange = buf[i];
  if (nodeToChange == null) return head.next; // we must need to remove head
  const removed = nodeToChange.next;
  nodeToChange.next = nodeToChange.next?.next;

  const result = removed === head ? nodeToChange : head;
  return result;
}

/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


function listToArray(head: ListNode | null): number[] {
  if (head === null) return [];
  let output = [head.val];
  while (head.next) {
    head = head.next;
    output.push(head.val);
  }
  return output;
}
