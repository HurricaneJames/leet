const TRUE = "✅";
const FALSE = "❌";

export function isEqualMark(r: any, l: any): string {
  return JSON.stringify(r) === JSON.stringify(l) ? TRUE : FALSE;
}
