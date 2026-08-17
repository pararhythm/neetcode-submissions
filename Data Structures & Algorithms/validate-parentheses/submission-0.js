class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            ')':'(',
            ']':'[',
            '}':'{'
        }

        for (let char of s) {
            if (char in pairs) {
                const topElement = stack.length === 0 ? '#' : stack.pop();

                if(topElement !== pairs[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
