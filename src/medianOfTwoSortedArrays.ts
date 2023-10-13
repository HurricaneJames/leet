// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

const debug = false;

export default function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);
  // a is the bigger array
  const a = nums1.length > nums2.length ? nums1 : nums2;
  const b = nums1.length > nums2.length ? nums2 : nums1;

  let left = 0;
  let right = b.length - 1;

  while (true) {  
    const i = Math.floor((left + right) / 2); // ptr for A
    const j = half - i - 2; // ptr for B
    
    const leftB = (i >= 0) ? b[i] : Number.NEGATIVE_INFINITY;
    const rightB = (i + 1) < b.length ? b[i + 1] : Number.POSITIVE_INFINITY;
    const leftA = (j >= 0) ? a[j] : Number.NEGATIVE_INFINITY;
    const rightA = (j + 1) < a.length ? a[j + 1] : Number.POSITIVE_INFINITY;
    
    // console.log('%o: ij(%o, %o)\t leftA: %o\t rightA: %o\tleftB: %o\trightB: %o', dx, i, j, leftA, rightA, leftB, rightB);

    if (leftA <= rightB && leftB <= rightA) {
      // partition correct
      if (total % 2 === 0) {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      } else {
        return Math.min(rightA, rightB);
      }
    }

    if (leftB > rightA) {
      right = i - 1;
    } else {
      left = i + 1;
    }    
  }
}
