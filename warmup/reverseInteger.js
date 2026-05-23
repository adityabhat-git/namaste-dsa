/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */
function reverse(x) {
    let reversed = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        reversed = (reversed * 10) + digit;
        x = Math.floor(x / 10);
    }
    reversed *= sign;

    // Check for 32-bit integer overflow
    let limit = Math.pow(2, 31);
    if (reversed < -limit || reversed > limit - 1) {
        return 0;
    }
    return reversed;
}

// Test cases
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
console.log(reverse(1534236469)); // Output: 0 (overflow case)