// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// O(n) where n is the total number of characters in all strings
export default function longestCommonPrefix(strs: string[]): string {
  // this should be slightly faster because it is not creating a bunch of new
  // strings with slice(). 
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let cmp = strs[0];
  let lcp = strs[0].length;

  for (let i=1; i<strs.length; i++) {
    const str = strs[i];
    for (let j=0; j<lcp; j++) {
      if (str[j] !== cmp[j]) {
        lcp = j;
      }
    }
    if (lcp === 0) return "";
  }
  return strs[0].slice(0, lcp);
};


function longestCommonPrefixOriginal(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  let lcp = strs[0];
  for (let i=1; i<strs.length; i++) {
    for (let j=0; j<lcp.length; j++) {
      if (strs[i][j] !== lcp[j]) {
        lcp = lcp.slice(0, j);
      }
      if (lcp.length === 0) return "";
    }
  }
  return lcp;
};