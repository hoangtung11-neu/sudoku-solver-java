document.addEventListener("DOMContentLoaded", () => {

    const boardElement = document.getElementById("sudoku-board");
    const solveBtn = document.getElementById("solve-btn");

    // ===============================
    // 1️⃣ TẠO BẢNG SUDOKU 9x9
    // ===============================
    function createBoard() {
        boardElement.innerHTML = "";

        for (let row = 0; row < 9; row++) {
            const tr = document.createElement("tr");

            for (let col = 0; col < 9; col++) {
                const td = document.createElement("td");
                const input = document.createElement("input");

                input.type = "text";
                input.maxLength = 1;

                // Chỉ cho nhập số 1–9
                input.addEventListener("input", () => {
                    input.value = input.value.replace(/[^1-9]/g, "");
                });

                td.appendChild(input);
                tr.appendChild(td);
            }

            boardElement.appendChild(tr);
        }
    }

    // ===============================
    // 2️⃣ LẤY DỮ LIỆU TỪ BẢNG → MẢNG 2D
    // ===============================
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

    // ===============================
    // 3️⃣ ĐIỀN KẾT QUẢ TỪ BACKEND VÀO BẢNG
    // ===============================
    function setBoardData(board) {
        document.querySelectorAll("#sudoku-board tr").forEach((row, i) => {
            row.querySelectorAll("input").forEach((input, j) => {
                if (board[i][j] === 0) {
                    input.value = "";
                } else {
                    input.value = board[i][j];
                }
            });
        });
    }

    // ===============================
    // 4️⃣ GỬI BOARD → SPRING BOOT → NHẬN KẾT QUẢ
    // ===============================
    async function solveSudoku() {
        const board = getBoardData();

        console.log("Sending board:", board);

        try {
            const response = await fetch("http://localhost:8080/api/solve", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(board)
            });

            if (!response.ok) {
                alert("❌ Backend error");
                return;
            }

            const solvedBoard = await response.json();
            console.log("Solved board:", solvedBoard);

            setBoardData(solvedBoard);

        } catch (error) {
            console.error("Fetch error:", error);
            alert("❌ Cannot connect to backend");
        }
    }

    // ===============================
    // 5️⃣ KHỞI TẠO
    // ===============================
    createBoard();
    solveBtn.addEventListener("click", solveSudoku);

});
