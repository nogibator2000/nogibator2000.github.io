var vBoard;
var turnCount;
var endGame;
const lines = [
[[0, 0], [0, 1], [0, 2]],
[[1, 0], [1, 1], [1, 2]],
[[2, 0], [2, 1], [2, 2]],
[[0, 0], [1, 1], [2, 2]],
[[0, 2], [1, 1], [2, 0]],
[[0, 0], [1, 0], [2, 0]],
[[0, 1], [1, 1], [2, 1]],
[[0, 2], [1, 2], [2, 2]]];

function startGame() {
  vBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  turnCount = 0;
  endGame = false;
  updateGame();
}
function updateGame()
{
  ReactDOM.render(
  React.createElement(Board, null),
  document.getElementById('root'));

}
function cheater(i, j)
{
  if (turnCount == 2 && (vBoard[0][0] == 1 && vBoard[2][2] == 1 || vBoard[2][0] == 1 && vBoard[0][2] == 1) && (i == 0 && j == 2 || i == 2 && j == 0 || i == 2 && j == 2 || i == 0 && j == 0)) {return true;}
  if (turnCount == 2 && (vBoard[0][1] == 1 && vBoard[1][0] == 1) && (i==2&&j==2)||(i==2&&j==1)||(i==1&&j==2)) {return true;}
  if (turnCount == 2 && (vBoard[0][1] == 1 && vBoard[1][2] == 1) && (i==0&&j==2)||(i==2&&j==1)||(i==1&&j==2)) {return true;}
  if (turnCount == 2 && (vBoard[1][0] == 1 && vBoard[2][1] == 1) && (i==2&&j==0)||(i==2&&j==1)||(i==1&&j==2)) {return true;}
  if (turnCount == 2 && (vBoard[2][1] == 1 && vBoard[1][2] == 1) && (i==0&&j==0)||(i==2&&j==1)||(i==1&&j==2)) {return true;}
 return false;}
 function strOutput(i, j) {
  if (vBoard[i][j] == 0) return null;
  if (vBoard[i][j] == 1) return "X";
  if (vBoard[i][j] == 2) return "O";
}
function fAITurn() {
  var turnNotDone = true;
  while (turnNotDone) {
    var i = Math.floor(Math.random() * 3);
    var j = Math.floor(Math.random() * 3);
    for (let ii = 0; ii < lines.length; ii++) {
      const [a, b, c] = lines[ii];
      const [ai, aj] = a;
      const [bi, bj] = b;
      const [ci, cj] = c;
      if ((vBoard[ai][aj] === 0 || vBoard[bi][bj] === 0 || vBoard[ci][cj] === 0) && (vBoard[ai][aj] === vBoard[bi][bj] && vBoard[ai][aj] != 0 || vBoard[ai][aj] === vBoard[ci][cj] && vBoard[ai][aj] != 0 || vBoard[bi][bj] === vBoard[ci][cj] && vBoard[bi][bj] != 0)) {
        if (vBoard[ai][aj] === 0) {i = ai;j = aj;}
        if (vBoard[bi][bj] === 0) {i = bi;j = bj;}
        if (vBoard[ci][cj] === 0) {i = ci;j = cj;}
      }}
    if (turnCount == 1 && vBoard[1][1] == 0) {i = 1;j = 1;}

    if (vBoard[i][j] == 0 && cheater(i, j) == false) {
      turnNotDone = false;
      fClick(i, j, "AI");
    }
  }
}
function fClick(i, j, player) {
  if (player == "player")
  {
    if (!endGame) {
      if (vBoard[i][j] == 0) {
        vBoard[i][j] = 1;
        if (++turnCount < 5) {
          fAITurn();
        }
      }
    }}
  if (player == "AI") {vBoard[i][j] = 2;}

  updateGame();
}
class Square extends React.Component {

  render() {
    return (
      React.createElement("button", {
        className: "square",
        onClick: () => fClick(this.props.i, this.props.j, "player") },

      strOutput(this.props.i, this.props.j)));


  }}


class Board extends React.Component {
  renderSquare(vi, vj) {
    return React.createElement(Square, {
      i: vi,
      j: vj });

  }

  render() {
    var status = 'Your turn!';
    if (turnCount > 4) {
      status = "Draw";
      endGame = true;}if (calculateWinner() == 2) {
      status = "AI won";
      endGame = true;}
    if (calculateWinner() == 1) {
      status = "Player won";
      endGame = true;}

    return (
      React.createElement("div", null,
      React.createElement("button", {
        className: "restart",
        onClick: () => startGame() },

      "Restart"),


      React.createElement("div", { className: "status" }, status),


      React.createElement("div", { className: "board-row" },
      this.renderSquare(0, 0),
      this.renderSquare(0, 1),
      this.renderSquare(0, 2)),

      React.createElement("div", { className: "board-row" },
      this.renderSquare(1, 0),
      this.renderSquare(1, 1),
      this.renderSquare(1, 2)),

      React.createElement("div", { className: "board-row" },
      this.renderSquare(2, 0),
      this.renderSquare(2, 1),
      this.renderSquare(2, 2))));



  }}


// ========================================
startGame();

function calculateWinner() {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const [ai, aj] = a;
    const [bi, bj] = b;
    const [ci, cj] = c;
    if (vBoard[ai][aj] && vBoard[ai][aj] === vBoard[bi][bj] && vBoard[ai][aj] === vBoard[ci][cj]) {
      return vBoard[ai][aj];
    }
  }
  return null;
}