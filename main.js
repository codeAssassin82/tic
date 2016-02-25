
// document.addEventListener('DOMContentLoaded', function(){

function startGame() {
  document.turn = "X";
  if(Math.random() < 0.5){
    document.turn = "O";
  }
  document.winner = null;
  setMessage(document.turn + " gets to start.");

}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if (document.winner != null){
    setMessage(document.winner + " already won the game.");
  }
  else if(square.innerText == "") {
    square.innerText = document.turn;
    switchTurn();
  } else {
      setMessage("That square is already used.");
  }
}
function switchTurn() {
  if (checkForWinner(document.turn)){
    setMessage("Congradulations, " + "! YOU WIN !!!");
    document.winner = document.turn;

  }
  else if (document.turn == "X"){
     document.turn = "O";
     setMessage("Its "  + document.turn + " 's turn!");
  }
  else if (document.turn == "O"){
     document.turn = "X";
     setMessage("Its "  + document.turn + " 's turn!");
  }
}


function checkForWinner(move){
  return (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
   )
}

function checkRow(a, b, c, move){
  var result = false;
  if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
    result = true;
  }
  return result;

}
function getBox(number){
  return document.getElementById("s" + number).innerText;

}
// })
