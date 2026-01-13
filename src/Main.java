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
        if (SudokuSolver.solve(puzzle)) {
            System.out.println("\nAfter solving:");
            board.printBoard();
        } else {
            System.out.println("No solution exists.");
        }
        System.out.println("\nStatistics:");
        System.out.println("Attempts: " + SudokuSolver.attempts);
        System.out.println("Backtracks: " + SudokuSolver.backtracks);

    }
}