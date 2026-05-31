/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 * Solution: One Pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * We can use the XOR operator to find the single number. The XOR operator has a property that a ^ a = 0 and a ^ 0 = a. This means that if we XOR all the numbers in the array, the pairs will cancel each other out and we will be left with the single number. We can initialize a variable to 0 and XOR it with each number in the array. At the end, this variable will hold the single number.
 * */
var singleNumber = function (nums) {
    let singleNum = 0; // Initialize singleNum to 0
    for (let i = 0; i < nums.length; i++) {
        singleNum ^= nums[i]; // XOR singleNum with each number in the array
    }
    return singleNum; // Return the single number
};

// Example usage:
const nums1 = [2, 2, 1];
console.log(singleNumber(nums1)); // Output: 1
const nums2 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums2)); // Output: 4
const nums3 = [1];
console.log(singleNumber(nums3)); // Output: 1



/** Another Solution
 * let hash = {};

    for( let i = 0; i < nums.length; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }
        else{
            hash[nums[i]]++;
        }
    } 

    for( let i = 0 ; i < nums.length; i++){
        if(hash[nums[i]] === 1){
            return nums[i];
        }
    }
 */
