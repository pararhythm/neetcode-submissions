class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++) {
            let target = nums[i];
            if (map.has(target)) {
                return true;
            } else {
                map.set(nums[i], i);
            }
        }
        return false;
    }
}
