🧩 Sudoku Solver – Java Spring Boot & Vanilla JavaScript
A full-stack Sudoku Solver application built with Spring Boot (Java) for the backend and Vanilla JavaScript, HTML, and CSS for the frontend.

This project focuses on:
Clean algorithm implementation
Real-time Sudoku validation
Smooth frontend–backend integration

User-friendly and modern UI

✨ Features

✅ Sudoku Board

Dynamically generated 9×9 Sudoku grid
Each cell accepts only numbers from 1 to 9
Empty cells are treated as 0

✅ Real-Time Validation

Prevents invalid Sudoku states:
Duplicate numbers in rows
Duplicate numbers in columns
Duplicate numbers in 3×3 sub-grids
Invalid cells are highlighted instantly

✅ Visual Assistance

Highlights:
Active cell
Corresponding row and column
Related 3×3 block
Clear visual separation between 3×3 blocks

✅ Backend Sudoku Solver
Implemented using Backtracking algorithm
Validates every move before placing a number
Returns the solved board as JSON

✅ Frontend–Backend Integration
Board data is sent to backend via REST API
Solved Sudoku is rendered automatically in the UI
Handles backend and connection errors gracefully

✅ Improved UI / UX
Clean, modern layout
Styled buttons and inputs
Responsive design for smaller screens

🛠 Technologies Used
Backend
Java 17+
Spring Boot
RESTful API
Backtracking algorithm
Frontend
HTML5
CSS3
Vanilla JavaScript (no frameworks)


🧪 How It Works
User enters numbers into the Sudoku board
Frontend validates the board in real time
When clicking Solve:
The board is sent to the backend as a 2D array
Backend solves the puzzle using backtracking
The solved board is returned as JSON
Frontend updates the UI with the solution

📄 License
This project is for learning and educational purposes.
Feel free to use, modify, and improve it.

👤 Author
Tung Hoang
Software Engineering Student
