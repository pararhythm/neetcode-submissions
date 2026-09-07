class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let maxCount = 0;

        for (let i = 0; i < nums.length; i++) {
            let x = nums[i];
            let currentCount = 0;
            let currentStack = 0;
            if (numSet.has(x - 1)) {
                continue;
            }

            while (numSet.has(x + currentStack)) {
                currentCount++;
                currentStack++;
            }

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        }

        return maxCount;
    }
}
