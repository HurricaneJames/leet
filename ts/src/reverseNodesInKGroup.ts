import { ListNode } from './utils/ListNode';

// Given the `head` of a linked list, reverse the nodes of the list `k` at a time and
// return its modified head. `k` is a positive integer that is less than or equal to
// the length of the linked list. If the number of nodes is not a multiple of `k` then
// left-out nodes, in the end, should remain as it is.
//
// You must solve the problem without modifying the values in the list's nodes, only
// nodes themselves may be changed.
//
// Follow-up: Can you solve the problem in `O(1)` extra memory space?


// Follow-up: yes, but it increases perf to O(n*k^2). The solution would be to modify
//   the kth node, then go back to the start and walk k-1 and update that node.
//   Repeat this until we are at the first node.

export default function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let start = new ListNode(0, head);
  let cur = start;
  while (cur?.next) {
    cur = reverseKAfterNode(cur, k);
  }
  return start.next;
};

// this is the follow up version that works by walking pointers
// mutates list a and returns the last node in the reversed list
// (ie. the parent of the next set to reverse)
function reverseKAfterNode(preNode: ListNode, k: number): ListNode {
  // console.log(`reverseKAfterNode([${preNode.toArray()}], k: ${k})}`)

  let kth = preNode;
  for (let i=0; i<k; i++) {
    if (kth.next === null) { return kth; }
    kth = kth.next;
  }
  const first = kth;
  const last = preNode.next!;
  const nextG = kth.next;

  if (first === last) return first;

  preNode.next = first;
  let a = last;
  let b = a.next!;
  let c = b.next!;

  while (true) {
    b.next = a;
    last.next = c;
    if (c === nextG) break;
    a = b;
    b = c;
    c = b.next!;
  }

  return last;
}

// // mutates list a and returns the last node in the reversed list
// // (ie. the parent of the next set to reverse)
// function reverseKAfterNode(a: ListNode, k: number): ListNode {
//   const stack: ListNode[] = [];
//   let cur: ListNode = a;
//   for (let i=0; i<k; i++) {
//     if (cur.next === null) { return cur; }
//     stack.push(cur.next);
//     cur = cur.next;
//   }

//   cur = a.next = stack.pop()!;
//   const last = cur.next;
//   while (stack.length > 0) {
//     const next = stack.pop()!;
//     cur = cur.next = next;
//   }
//   cur.next = last;
//   return cur;
// }