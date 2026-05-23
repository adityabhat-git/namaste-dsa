/** 
 * Function to the count the number of digits in a given number.
 * Example:
 * countDigits(12345) should return 5
 * countDigits(0) should return 1
 * countDigits(-123) should return 3
 */

function countDigits(num) {
    // Handle the case for 0
    if (num === 0) {
        return 1;
    }
    // Handle negative numbers
    num = Math.abs(num);
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

// Test cases
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(0));      // Output: 1
console.log(countDigits(-123));   // Output: 3