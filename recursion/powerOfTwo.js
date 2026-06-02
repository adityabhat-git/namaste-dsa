/**
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 * Solution: Bit Manipulation
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * A number that is a power of two has exactly one bit set in its binary representation. For example, 1 (2^0) is 0001, 2 (2^1) is 0010, 4 (2^2) is 0100, and so on. If we subtract 1 from a power of two, we get a number with all the bits after the set bit turned on. For example, 1 - 1 = 0 (0000), 2 - 1 = 1 (0001), 4 - 1 = 3 (0011). If we perform a bitwise AND operation between the number and the number minus one, we will get zero if the number is a power of two. This is because the only set bit in the power of two will be turned off in the number minus one, and all other bits will be turned on.
 * We also need to check if n is greater than 0, because negative numbers and zero cannot be powers of two.
 * */
var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0; // Check if n is greater than 0 and if n & (n - 1) is equal to 0
};

// Example usage:
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false

/** Another Solution
 * function isPowerOfTwo(n) {
 *   if (n <= 0) return false; // Check if n is less than or equal to 0
 *  while (n % 2 === 0) { // While n is divisible by 2
 *    n /= 2; // Divide n by 2
 *  }
 *  return n === 1; // Return true if n is equal to 1, false otherwise
 * }
 */