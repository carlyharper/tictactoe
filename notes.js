/*
1st step: state 
= variables to define the universe

2nd step: action 
= functions that will change the universe

3rd step: actually doing the actions (calling)
= invocations


var board = [[null, null, null],
            [null, null, null],
            [null, null, null]];

var whosTurn = "X"

*/

console.log('script loaded');

// 1. write a variable that creates an empty tic-tac-toe

var board = [[null, null, null],
            [null, null, null],
            [null, null, null]];

//2. Write a variable that represents who's turn it is ("X" or "O")

var playerTurn = "X";

//3. write a function that returns the value at a given row-column position

function valueAtPosition(row, column) {
    return (board[row][column]);
}

//4. write a function that prints the tic-tac-toe board nicely in the console. use the function from #3. 

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log("**************");
}

//5. write a function that sets a given value at a given row position. no need to return anything for this func

/*
function setValue(row, column) {
    board[row][column] = playerTurn;
}
*/

//6. modify the function from #5 so that it prints the board to the console after changing it.
// hint: use the function from #4

function setValue(row, column) {
    board[row][column] = playerTurn;
        printBoard();
    }

//7. write a function that:
// a) prompts the user for a row b) prompts the user for a column c) sets either an "X" or "O" on the board
//use what you wrote in #5

/*
function promptPlay(rowInput, columnInput) {
    var rowInput = parseInt(prompt("Pick a row"));
    var columnInput = parseInt(prompt("Pick a column"));
    setValue(rowInput, columnInput);
    }

promptPlay(2, 1);
*/

//8. modify the function from #7 so that it changes whose turn it is

/*
function promptPlay(rowInput, columnInput) {
    var rowInput = parseInt(prompt("Pick a row"));
    var columnInput = parseInt(prompt("Pick a column"));
    setValue(rowInput, columnInput);
    if (playerTurn === "X") {
        playerTurn = "O"
    } else {
        playerTurn = "X"
    }
}
*/

//9. modify the function again so that it only runs if the row-column position is blank 
//otherwise "X" could jsut overwrite "O" tiles! (and vice versa)

function promptPlay() {
    var rowInput = parseInt(prompt("Pick a row"));
    var columnInput = parseInt(prompt("Pick a column"));   
    if (valueAtPosition(rowInput, columnInput) === "null") {
        setValue(rowInput, columnInput);
        if (playerTurn === "X") {
            playerTurn = "O"
        } else if (playerTurn ==="O") {
            playerTurn = "X";
        } else {
            alert("NO");
        }
    }  
}

//10. write a function that looks at the tic-tac-toe board and decides who's won the game. -"X", "O", or no one

function checkVictory() {

    var row1 = board[0]; // ["X", null, "O"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; // ["O", null, "O"]
    var col1 = [ board[0][0], board[1][0], board[2][0] ];  // ["X", "X", "O"]
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  // [null, null, null]
    var col3 = [ board[0][2], board[1][2], board[2][2] ];  // ["O", "X", "O"]
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; // ["X", null, "O"]
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; // ["O", null, "O"]

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length ; i++) {

        var winCondition = winConditions[i]; // ["X", null, "O"]

        var string = "" + winCondition[0] + winCondition[1] + winCondition[2]; 

        if (string == "XXX") {
            return "X wins";
        } else if (string == "OOO") {
            return "O wins";
        }
    }
    return "No one wins" 
}

//11. write a loop that asks for user input until someone wins the game

function userTurn() {
    while (checkVictory() == "No one wins" ) {
        //keep doing stuff
        promptPlay();
    }
}

userTurn();