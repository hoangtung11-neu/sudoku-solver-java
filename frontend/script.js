let initialBoard = null;

document.addEventListener("DOMContentLoaded", () => {
    const boardElement = document.getElementById("sudoku-board");
    const solveBtn = document.getElementById("solve-btn");

    
    function createBoard() {
        boardElement.innerHTML = "";

        for (let row = 0; row < 9; row++) {
            const tr = document.createElement("tr");

            for (let col = 0; col < 9; col++) {
                const td = document.createElement("td");
                const input = document.createElement("input");

                input.type = "text";
                input.maxLength = 1;

                input.dataset.row = row;
                input.dataset.col = col;

                input.addEventListener("input", () => {
                    input.value = input.value.replace(/[^1-9]/g, "");
                    validateBoard();
                });

                input.addEventListener("focus", () => highlight(input));
                input.addEventListener("blur", clearHighlight);

                td.appendChild(input);
                tr.appendChild(td);
            }
            boardElement.appendChild(tr);
        }
    }

    
    function getBoardData() {
        const board = [];
        document.querySelectorAll("#sudoku-board tr").forEach(row => {
            const rowData = [];
            row.querySelectorAll("input").forEach(input => {
                rowData.push(input.value === "" ? 0 : Number(input.value));
            });
            board.push(rowData);
        });
        return board;
    }

    function setBoardData(board) {
        document.querySelectorAll("#sudoku-board tr").forEach((row, i) => {
            row.querySelectorAll("input").forEach((input, j) => {
                input.value = board[i][j] === 0 ? "" : board[i][j];
            });
        });
    }

    
    function validateBoard() {
        clearErrors();
        const board = getBoardData();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] !== 0 && !isValid(board, r, c)) {
                    markError(r, c);
                }
            }
        }
    }

    function isValid(board, row, col) {
        const val = board[row][col];

        for (let i = 0; i < 9; i++) {
            if (i !== col && board[row][i] === val) return false;
            if (i !== row && board[i][col] === val) return false;
        }

        const sr = Math.floor(row / 3) * 3;
        const sc = Math.floor(col / 3) * 3;

        for (let r = sr; r < sr + 3; r++) {
            for (let c = sc; c < sc + 3; c++) {
                if ((r !== row || c !== col) && board[r][c] === val) {
                    return false;
                }
            }
        }
        return true;
    }

    function markError(row, col) {
        document
            .querySelector(`input[data-row="${row}"][data-col="${col}"]`)
            .classList.add("error-cell");
    }

    function clearErrors() {
        document.querySelectorAll(".error-cell")
            .forEach(c => c.classList.remove("error-cell"));
    }

    function isBoardValid() {
        return !document.querySelector(".error-cell");
    }

    
    function highlight(cell) {
        clearHighlight();

        const row = Number(cell.dataset.row);
        const col = Number(cell.dataset.col);

        document.querySelectorAll("input").forEach(input => {
            const r = Number(input.dataset.row);
            const c = Number(input.dataset.col);

            if (
                r === row ||
                c === col ||
                (Math.floor(r / 3) === Math.floor(row / 3) &&
                 Math.floor(c / 3) === Math.floor(col / 3))
            ) {
                input.classList.add("highlight");
            }
        });

        cell.classList.add("active-cell");
    }

    function clearHighlight() {
        document.querySelectorAll(".highlight, .active-cell")
            .forEach(c => c.classList.remove("highlight", "active-cell"));
    }

    async function solveSudoku() {
        if (!isBoardValid()) {
            alert("❌ Sudoku board is invalid");
            return;
        }

        initialBoard = getBoardData();

        const response = await fetch("http://localhost:8080/api/solve", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(initialBoard)
        });

        const solvedBoard = await response.json();

        document.querySelectorAll("input").forEach(input => {
            const r = Number(input.dataset.row);
            const c = Number(input.dataset.col);

            if (initialBoard[r][c] !== 0) {
                input.classList.add("prefilled");
                input.disabled = true;
            } else {
                input.value = solvedBoard[r][c];
                input.classList.add("solved-cell");
            }
        });
    }

    createBoard();
    solveBtn.addEventListener("click", solveSudoku);
});
