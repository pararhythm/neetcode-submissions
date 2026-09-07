class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let pairs = {
            ')':'(',
            ']':'[',
            '}':'{'
        };

        for (let char of s) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            }
            else {
                const topElement = stack.pop();
                if (topElement !== pairs[char]) {
                    return false;
                }
            }
          
        }
        return stack.length === 0;
    }
}
