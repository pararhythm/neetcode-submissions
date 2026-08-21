class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of t) {
            if (!count[char] || count[char] === undefined) {
                return false;
            }
            count[char]--;
        }

        return true;
    }
}
