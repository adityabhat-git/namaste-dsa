/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Solution: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * We can use two pointers to move the non-zero elements to the front of the array. We 
 * iterate through the array with one pointer and whenever we encounter a non-zero element,
 * we swap it with the element at the position of the second pointer, which keeps track of 
 * the last position of a non-zero element. After we have moved all non-zero elements to
 * the front, we fill the remaining positions with zeros.
 * This way, we can move all zeros to the end of the array while maintaining the relative 
 * order of the non-zero elements in a single pass through the array.
 */
var moveZeroes = function (nums) {
    let lastNonZeroFoundAt = 0; // Pointer for the last position of a non-zero element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // If the current element is non-zero, 
            // swap it with the element at lastNonZeroFoundAt
            [nums[i], nums[lastNonZeroFoundAt]] = [nums[lastNonZeroFoundAt], nums[i]];
            lastNonZeroFoundAt++;
        }
    }
};

// Example usage:
const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]

/**
    let pos = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[pos] = nums[i];
            pos++;
        }
    }

    //fill the pending positions from current pos till end with 0
    for(let i = pos; i < nums.length; i++){
        nums[i] = 0;
    }
 */
