/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

/**
 * @param {number[]} prices
 * @return {number}
 * 
 * Solution: One Pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * We can keep track of the minimum price we have seen so far and the maximum profit we can achieve.
 * As we iterate through the prices, we update the minimum price and calculate the potential profit by selling at the current price.
 * We then update the maximum profit if the potential profit is greater than the current maximum profit.
 * This way, we can find the maximum profit in a single pass through the array.
 * */
var maxProfit = function (prices) {
    let minPrice = prices[0]; // Initialize minPrice to the first price
    let maxProfit = 0; // Initialize maxProfit to 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]; // Update minPrice if the current price is lower
        }

        if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice; // Update maxProfit if the potential profit is greater
        }   
    }
    return maxProfit; // Return the maximum profit found
};

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5
const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0
