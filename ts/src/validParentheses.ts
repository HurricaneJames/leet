// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine
// if the input string is valid.
// An input string is valid if:
// 1. open brackets must be closed by the same type of brackets.
// 2. open brackets must be closed in the correct order.
// 3. every close bracket has a corresponding open bracket of the same type.

export default function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let i=0; i<s.length; i++) {
    if (isOpening(s[i])) {
      stack.push(s[i]);
    } else if (stack.length === 0 || closeToOpen[s[i]] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};

function isOpening(s: string): boolean {
  return s === '(' || s === '{' || s === '[';
}

const closeToOpen: {[id: string]: string} = {
  ')': '(',
  ']': '[',
  '}': '{',
}
