/**
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Solution: One Pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * We iterate through the array and keep track of the current count of consecutive 1's.
 * When we encounter a 1, we increment the current count.
 * When we encounter a 0, we update the maximum count and reset the current count to 0.
 * Finally, we return the maximum of currCount and maxCount to handle the case where
 * the array ends with consecutive 1's (no trailing 0 to trigger the update).
 * */
var findMaxConsecutiveOnes = function (nums) {
  let currCount = 0; // Initialize Current Count to 0
  let maxCount = 0; // Initialize max Count to 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currCount++; // if 1 encountered, increment the current counter.
    }
    if (nums[i] === 0) {
      // if 0 encounters, update the maxCount by checking the max between currCount and maxCount.
      maxCount = Math.max(currCount, maxCount);
      // reset the current Count to 0
      currCount = 0;
    }
  }
  //return the max of currCount and maxCount. This we need to since in the end , if 0 is not there in the array,
  // we won't be able to update the maxCount, so need to update it in the return statement
  return Math.max(currCount, maxCount);
};

// Example usage:
const nums1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums1)); // Output: 3
const nums2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums2)); // Output: 2

/**
     - Same complexity but less efficient code:- 
        let maxCount = 0; // Initialize maxCount to 0
        let currentCount = 0; // Initialize currentCount to 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentCount++; // Increment currentCount if the current element is 1
                maxCount = Math.max(maxCount, currentCount); // Update maxCount if currentCount is greater
            } else {
                currentCount = 0; // Reset currentCount if the current element is 0
            }
        }
        return maxCount; // Return the maximum count of consecutive 1's
*/
