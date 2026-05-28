/**
 * Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 * Solution: Two Pointers
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var reverseString = function (s) {
    let left = 0; // Pointer for the start of the array
    let right = s.length - 1; // Pointer for the end of the array
    while (left < right) {
        // Swap the characters at left and right pointers
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    
};

// Example usage:
const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1); // Output: ["o", "l", "l", "e", "h"]

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2); // Output: ["h", "a", "n", "n", "a", "H"]