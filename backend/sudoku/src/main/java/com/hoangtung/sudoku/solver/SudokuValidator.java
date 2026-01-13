package com.hoangtung.sudoku.solver;
public class SudokuValidator {
    public static boolean isValid(int[][] board, int row, int col, int num){
        for (int c = 0; c < 9; c++){
            if (board[row][c] == num){
                return false;
            }
        }
        for (int r = 0; r < 9;r++){
            if (board[r][col] == num) {
                return false;
            }
        }
        int startRow = row - row % 3;
        int startCol = col - col % 3;
        for (int r = startRow ; r < startRow + 3; r++){
            for (int c = startCol; c < startCol + 3; c++) {
                if (board[r][c] == num) {
                    return false;
                }
            }
        }
        return true;
    }
}
