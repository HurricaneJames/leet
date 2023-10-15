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

  toArray(): number[] {
    let output = [];
    let cur: ListNode | null = this;
    while (cur) {
      output.push(cur.val);
      cur = cur.next;
    };
    return output;
  
  }
}


export function arrayToList(nums: number[]): ListNode | null {
  if (nums.length === 0) return null;
  const head = new ListNode(nums[0]);
  let cur = head;
  for (let i=1; i<nums.length; i++) {
    cur = cur.next = new ListNode(nums[i]);
  }
  return head;
}
