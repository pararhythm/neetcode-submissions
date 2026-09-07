class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set();

        for (let num of nums) {
            let target = num
            if (set.has(target)) {
                return true;
            } else {
                set.add(target)
            }
        }
        return false;
    }
}
