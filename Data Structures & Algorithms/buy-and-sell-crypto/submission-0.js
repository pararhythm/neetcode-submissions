class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let maxProfit = 0
        while (left < prices.length) {
            for (let right = left + 1; right < prices.length; right++) {
                let result = prices[right] - prices[left];
                if (result > maxProfit) {
                    maxProfit = result;
                }
            }
            left++;
        }
        return maxProfit;
    }
}
