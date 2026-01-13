public class SudokuSolver {

    public static int attempts = 0;
    public static int backtracks = 0;

    public static boolean solve(int[][] board) {

        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {

                if (board[row][col] == 0) {

                    for (int num = 1; num <= 9; num++) {

                        attempts++;

                        if (SudokuValidator.isValid(board, row, col, num)) {

                            board[row][col] = num;

                            if (solve(board)) {
                                return true;
                            }

                            // backtrack
                            board[row][col] = 0;
                            backtracks++;
                        }
                    }

                    return false;
                }
            }
        }
        return true;
    }
}
