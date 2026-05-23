/** Write a function to check if a number is a palindrome */

function isPalindromeNumber(num) {
    //Handle negative numbers
    if (num < 0) return false;

    let originalNum = num;
    let reversedNum = 0;
    while (num > 0) {
        let digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

// Test cases
console.log(isPalindromeNumber(121)); // Output: true
console.log(isPalindromeNumber(-121)); // Output: false
console.log(isPalindromeNumber(10)); // Output: false
console.log(isPalindromeNumber(12321)); // Output: true
