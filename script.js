var board = [[null, null, null],
            [null, null, null],
            [null, null, null]];

var playerTurn = "X";

function updatePosition(row, column) {
    return board[row][column];
}

function printBoard() {
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
    console.log("**************");
}

function setValue(row, column) {
    board[row][column] = playerTurn;
    printBoard();
}

function playerAction() {
    var rowPrompt = parseInt(prompt("enter a row"));
    var columnPrompt = parseInt(prompt("enter a column"));
    if (updatePosition(rowPrompt, columnPrompt) == null) {
    setValue(rowPrompt, columnPrompt);
        if (playerTurn === "X") {
            playerTurn = "O"
        } else {
            playerTurn = "X";
        }
    } else {
        console.log("that spot is taken");
    }
}

function checkVictory() {

    var row1 = board[0]; 
    var row2 = board[1]; 
    var row3 = board[2]; 
    var col1 = [ board[0][0], board[1][0], board[2][0] ]; 
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  
    var col3 = [ board[0][2], board[1][2], board[2][2] ]; 
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; 
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; 

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length ; i++) {

        var winCondition = winConditions[i]; 

        var string = "" + winCondition[0] + winCondition[1] + winCondition[2]; 

        if (string == "XXX") {
            return "X wins";
        } else if (string == "OOO") {
            return "O wins";
        }
    }
    return "No one wins" 
}

while(checkVictory() == "No one wins") {
    playerAction();
}



