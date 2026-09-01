class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = Array.from({length: 9}, () => new Set());
        let column = Array.from({length: 9}, () => new Set());
        let boxes = Array.from({length: 3}, () => Array.from({length: 3}, () => new Set()));

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === ".") {
                    continue;
                }
                if (row[r].has(board[r][c])) return false;
                if (column[c].has(board[r][c])) return false;
                if (boxes[Math.floor(r / 3)][Math.floor(c / 3)].has(board[r][c])) return false;
                row[r].add(board[r][c]);
                column[c].add(board[r][c]);
                boxes[Math.floor(r / 3)][Math.floor(c / 3)].add(board[r][c]);
            }
        }
        return true;
    }
}
