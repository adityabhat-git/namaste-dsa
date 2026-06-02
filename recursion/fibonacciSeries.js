/**
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */

/**
 * @param {number} n
 * @return {number}
 * Solution: Recursion
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 * The Fibonacci sequence can be defined recursively, where each term is the sum of the two preceding terms. The base cases are F(0) = 0 and F(1) = 1. For n > 1, we can calculate F(n) by calling the function recursively for F(n - 1) and F(n - 2) and summing their results.
 * However, this approach has a time complexity of O(2^n) due to the repeated calculations of the same Fibonacci numbers. For example, F(5) would require calculations for F(4), F(3), F(2), F(1), and F(0), and many of these values would be calculated multiple times.
 * The space complexity is O(n) because of the maximum depth of the recursion stack, which occurs when n is large.
 * */
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2); // Recursive calls for F(n - 1) and F(n - 2)
};

// Example usage:
console.log(fib(2)); // Output: 1
console.log(fib(3)); // Output: 2
console.log(fib(4)); // Output: 3