class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const res = new Array(n);
        let prefix = 1;

        for (let i = 0; i < res.length; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;

        for (let j = res.length - 1; j > -1; j-- ) {
            res[j] *= suffix;
            suffix *= nums[j];
        }

        return res;
    }
}
