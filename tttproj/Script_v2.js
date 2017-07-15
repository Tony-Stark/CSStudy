/**
 * @file Logic for a Tic-Tac-Toe game, between a human player and a computer.
 *            the computers moves are random.
 * @version: 0.2
 * 
 * @author Saar Zeraviv <sz.unsc@gmail.com>
 * 
 */

/**
 * @param squares : array of squares on screen.
 * @param arr : the board for logic actions.
 * @param isGameActive : holds the state of the game (active or done).
 */
var squares = document.getElementsByClassName("square");
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var isGameActive = true;
/**
 * isWin: determines if a given board is won by the examined player
 * @param {integer[]} board 
 * @param {integer} player
 * @return {Bool} 
 */
function isWin(board, player) {
    //check first diagonal
    if (board[0] == player && board[4] == player && board[8] == player)
        return true;

    //check second diagonal
    if (board[2] == player && board[4] == player && board[6] == player)
        return true;

    //check rows
    var i;
    for (i = 0; i < 3; i++) {
        if (board[i * 3] == player && board[(i * 3) + 1] == player && board[(i * 3) + 2] == player)
            return true;
    }

    //check cullomns
    for (i = 0; i < 3; i++) {
        if (board[i] == player && board[i + 3] == player && board[i + 6] == player)
            return true;
    }

    return false;
}
/**
 * isDraw: determines if a given board is drawn
 * @param {integer[]} board 
 * @return {Bool} 
 */
function isDraw(board) {
    var i;
    for (i = 0; i < 9; i++)
        if (board[i] == 0)
            return false;
    if (!isWin(board, 1) && !isWin(board, 2))
        return true;
}
/**
 * isGameOver: terminates the game if it is over
 * @param {integer[]} board 
 * @return {Bool} 
 */
function isGameOver(board) {
    if (isWin(board, 1)){
        isGameActive = false;
        $("#MessageBox").delay("Slow").queue(function(n) {$(this).html("Player Won!");n();}).fadeIn("Slow");
        return true;
    }
    if (isWin(board, 2)){
        isGameActive = false;
        $("#MessageBox").delay("Slow").queue(function(n) {$(this).html("Computer Won!");n();}).fadeIn("Slow");
        return true;
    }
    if (isDraw(board)){
        isGameActive = false;
        $("#MessageBox").delay("Slow").queue(function(n) {$(this).html("Draw!");n();}).fadeIn("Slow");
        return true;
    }
    return false;
}
/**
 * clicked: intercepts a click on a square, marks it if available
 * @param {integer} index - index of clicked square
 * @return {Bool} 
 */
function clicked(index) {
    if (!isGameActive)
        return;
    if (arr[index] == 0) {
        setSquare(index, 1);
        isGameOver(arr);
        if(isGameActive){
            aiMove(arr,2,0);
            isGameOver(arr);   
        }
    }
}
/**
 * setSquare: marks the wanted square for the given player
 * @param {integer} index 
 * @param {integer} player
 * @return {void} 
 */
function setSquare(index, player) {
    if (!isGameActive)
        return;
    if (arr[index] == 0) {
        arr[index] = player;
        if (player == 1){
            $(squares[index]).fadeOut(2).queue(function(n) {$(this).html("X");n();}).fadeIn("normal");
        }
        else{
            $(squares[index]).delay("slow").fadeOut(2).queue(function(n) {$(this).html("O");n();}).fadeIn("normal");
        }
    }

}
/**
 * resetBoard: returns the board to the original state
 * @return {void} 
 */
function resetBoard() {
    var i;
    for (i = 0; i < 9; i++) {
        arr[i] = 0;
        squares[i].innerHTML = "";
    }
    isGameActive = true;
    $("#MessageBox").fadeOut(200);
}
/**
 * nextPlayer: returns the other player's code.
 * @return {integer} 
 */
function nextPlayer(player) {
    if (player == 1)
        return 2;
    else
        return 1;
}
/**
 * aiMove: Calculates computer move based on a minimax tree and executes it.
 *                                                           
 * @param {integer[]} board 
 * @param {integer} player
 * @param {integer} n
 * 
 * @return {integer} 
 */
function aiMove(board, player, n) {
    if (isWin(board, nextPlayer(player)))
        return -1;
    if (isDraw(board))
        return 0;
    var bestScore = -1000;
    var bestMove = 0;
    var nextboard;
    for (var i = 0; i < 9; i++) {
        if (board[i] == 0) {
            nextboard = board.slice();
            nextboard[i] = player;
            var score = -aiMove(nextboard, nextPlayer(player), 1);
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    if (n == 0)
        setSquare(bestMove, 2);
    return bestScore;
}
