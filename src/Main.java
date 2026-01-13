public class Main {
    public static void main(String args[]) {
        int[][] puzzle = {
            {5,3,0, 0,7,0, 0,0,0},
            {6,0,0, 1,9,5, 0,0,0},
            {0,9,8, 0,0,0, 0,6,0},

            {8,0,0, 0,6,0, 0,0,3},
            {4,0,0, 8,0,3, 0,0,1},
            {7,0,0, 0,2,0, 0,0,6},

            {0,6,0, 0,0,0, 2,8,0},
            {0,0,0, 4,1,9, 0,0,5},
            {0,0,0, 0,8,0, 0,7,9}
        };
        SudokuBoard board = new SudokuBoard(puzzle);
        System.out.println("Sudoku puzzle: ");
        board.printBoard();
        
        System.out.println("\nTest isValid:");
        System.out.println("Can place 5 at (0,2)? " + SudokuValidator.isValid(puzzle, 0, 2, 5)); // false
        System.out.println("Can place 4 at (0,2)? " + SudokuValidator.isValid(puzzle, 0, 2, 4)); // true


    }
}