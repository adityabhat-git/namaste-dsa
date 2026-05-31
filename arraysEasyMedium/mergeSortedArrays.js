/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Solution: Two Pointers
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 * We can use two pointers to merge the two arrays in-place. We start from the end of both arrays and compare the elements. We place the larger element at the end of nums1 and move the corresponding pointer. We repeat this process until we have merged all elements from nums2 into nums1.
 * This way, we can merge the arrays without using extra space and in linear time.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for the end of nums1
  while (j >= 0) {
    // While there are elements in nums2
    if (i >= 0 && nums1[i] > nums2[j]) {
      // If the current element in nums1 is greater than the current element in nums2
      nums1[k] = nums1[i]; // Place the element from nums1 at the end of nums1
      i--; // Move the pointer for nums1
    } else {
      nums1[k] = nums2[j]; // Place the element from nums2 at the end of nums1
      j--; // Move the pointer for nums2
    }
    k--; // Move the pointer for the end of nums1
  }
};

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

const nums3 = [1];
const m2 = 1;
const nums4 = [];
const n2 = 0;
merge(nums3, m2, nums4, n2);
console.log(nums3); // Output: [1]

const nums5 = [0];
const m3 = 0;
const nums6 = [1];
const n3 = 1;
merge(nums5, m3, nums6, n3);
console.log(nums5); // Output: [1]

/**
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
      if (p2 < 0) {
        break;
      }
      if (p1 >= 0 && nums1[p1] > nums2[p2]) {
        nums1[i] = nums1[p1];
        p1--;
      } else {
        nums1[i] = nums2[p2];
        p2--;
      }
    }
*/
