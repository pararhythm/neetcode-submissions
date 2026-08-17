class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;
        for (let i = 0 ; i < prices.length; i++) {
            const price = prices[i];
            if (price < minPrice) {
                minPrice = price
            } else {
                let currentProfit = price - minPrice;
                if (currentProfit > maxProfit) {
                    maxProfit = currentProfit;
                }
            }    
        }
        return maxProfit;
    }
}