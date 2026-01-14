package com.hoangtung.sudoku.solver;
public class SudokuBoard {
    private int[][] board;
    public SudokuBoard( int [][] board) {
        this.board = board;
    }
    public int[][] getBoard() {
        return board;
    }

    public void printBoard(){
        for (int row = 0; row < 9; row++) {
            if (row % 3 == 0 && row != 0 ){
                System.out.println("------+-------+------");
            }
            for (int col = 0;col <9; col++){
                if (col % 3 == 0 && col != 0){
                    System.out.print("| ");
                }
                if (board[row][col] == 0){
                    System.out.print(". ");
                } else {
                    System.out.print(board[row][col] + " ");
                }
            }
            System.out.println();
        }
    }
}