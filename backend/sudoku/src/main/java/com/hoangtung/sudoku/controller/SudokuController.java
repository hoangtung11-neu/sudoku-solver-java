package com.hoangtung.sudoku.controller;

import com.hoangtung.sudoku.solver.SudokuSolver;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SudokuController {

    @PostMapping("/solve")
    public int[][] solve(@RequestBody int[][] board) {
        SudokuSolver solver = new SudokuSolver(board);
        solver.solve();
        return solver.getBoard();
    }
}
