let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];


let playerSelect = 'X';
let playerSymbol = 'X';
let gameOver = false;


let renderBoard = ()=>{

    let boardDOM= document.getElementById('board')
    boardDOM.innerHTML= '';

    board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');
      cellDiv.textContent = cell;
      cellDiv.addEventListener('click', () => handleMove(rowIndex, colIndex));
      boardDOM.appendChild(cellDiv);
    })
  });


}



let startGame = () =>{
    playerSymbol = document.getElementById('playerSymbol').value;
    playerSelect = playerSymbol;
    board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
    gameOver = false;
    document.getElementById('status').innerText = '';
    renderBoard();

}

let handleMove = (rowIndex, colIndex) =>{
    if( board[rowIndex, colIndex] !== '' || gameOver) return;
    board[rowIndex, colIndex] = playerSelect;
    renderBoard();



   if (checkWin(playerSelect)) {
    gameOver = true;
    show(`${playerSelect} wins!`);
    return;
}

// Check for early forced draw
if (checkEarlyDraw(board, playerSelect)) {
    gameOver = true;
    show("It's a draw (smart draw system)!");
    return;
}

// Standard full board draw
if (getEmptySlots(board).length === 0) {
    gameOver = true;
    show("It's a draw!");
    return;
}



    playerSelect = playerSelect === 'X' ? 'O' : 'X';

}


let checkWin = (player) =>{

    if(checkDiag(player) || checkRow(player) || checkCol(player) ) return true;
    

}


let checkDiag = (player) =>{
let leftToRightWin = true;
let righttoLeftWin = true;

for(let i = 0; i < 3 ; i++){
    if (board[i*3+i] !== player) leftToRightWin = false;
    if (board[i*3+ (2-i)] !== player) righttoLeftWin = false;

}

return true;


    
}


let checkRow = (player) => {
    for(let row = 0; row < 3; row++){
        if ((board[row][0] && board[row][1] && board[row][2]) == playerSelect){
            return true;
        }

    }

    return leftToRightWin || rightToLeftWin;
}


let checkCol = (player) =>{
 for(let col = 0; col < 3; col++){
        if ((board[0][col] && board[1][col] && board[2][col]) == playerSelect){
            return true;
        }

    }

    return false;

}







/********************************************/
/*          SMART DRAW SYSTEM LOGIC          */
/*  Functions to detect early forced draws, */
/*  find empty slots, and check winning     */
/*  possibilities on the next move.         */
/********************************************/

let getEmptySlots=(board)=>{
    const empties = [];
    for(let r =0; r < 3; r++){
        for(let c = 0; c < 3; c++){
            if(board[r][c] === "") empties.push([r,c])
        }
    }
    return empties

}


let canWinNextMove=(board,player)=>{
    const empties = getEmptySlots(board);
    for(const [r,c] of empties){
        if(checkWin(board,player)){
            board[r,c] = "";
            return true;

        }
        board[r][c] = "";
    }

    return false;
}

let checkEarlyDraw= (board,currentPlayer)=>{
    const empties = getEmptySlots(board);
    if(empties.length !== 2)return false;
    const opponent = playerSelect === "X" ? "O" : "X";

    const currentCanWin = canWinNextMove(board, currentPlayer);
  const opponentCanWin = canWinNextMove(board, opponent);

  // If no one can win on next move, forced draw!
  return !currentCanWin && !opponentCanWin;
}









