import { listeners } from "process";
import { ListNode } from "./utils/ListNode";

// 21. Merge Two Sorted Lists
// Easy
// You are given the heads of two sorted linked lists, `list` and `list2`.
//
// Merge the two lists into one *sorted* list. The list should be made by splicing together
// together the nodes of the first two lists.
//
// Return the head of the merged linked list.

export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return null;

  const head = new ListNode();
  let tail = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 === null ? list2 : list1;

  return head.next;
}

function mergeTwoListsTheHardWay(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null && list2 === null) return null;
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let a: ListNode | null;
  let b: ListNode | null;
  if (list1.val < list2.val) {
    a = list1;
    b = list2;
  } else {
    a = list2;
    b = list1;
  }
  let head = a;

  while (true) {
    // todo - condition?

    // termination conditions
    if (!a.next) {
      a.next = b;
      // console.log('    ->', head.toArray());
      return head;
    }
    if (!b.next) {
      while (a.next && a.next.val <= b.val) {
        a = a.next;
      }
      b.next = a.next;
      a.next = b;
      // console.log('    ->', head.toArray());
      return head;
    }

    if (a.next.val <= b.val) {
      a = a.next;
    } else {
      // splice b into a
      const c = a.next;
      a.next = b;
      b = c;
    }
  }
};