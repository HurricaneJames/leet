import { ListNode } from './utils/ListNode';

// Given a linked list, swap every two adjacent nodes and return its head. You must
// solve the problem without modifying the values in the list's nodes (i.e., only
// nodes themselves may be changed.)

// time: O(n)
// space: O(1)
export default function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  const result = swap(head);

  let cur = result.next;
  while (cur?.next) {
    cur.next = swap(cur.next);
    cur = cur.next?.next;
  }

  return result;
};

function swap(a: ListNode): ListNode {
  if (!a.next) return a;
  const b = a.next;
  a.next = b.next;
  b.next = a;
  return b;
}