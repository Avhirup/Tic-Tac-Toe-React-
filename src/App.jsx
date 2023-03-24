import { useState } from "react"
import Board from "./components/Board";
import History from "./components/History";
import calculateWinner from "./helper";
import './styles/root.scss';

const App = () => {

  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ])

  const [currentMove, setCurrentMove] = useState(0)

  const current = history[currentMove]

  // console.log(history)

  // checking for winner
  const { winner, winningSquares } = calculateWinner(current.board);
  // console.log(winner)
  const message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : 'O'}`

  // checking if match is draw
  function calculateDraw(sqr) {
    return sqr
  }
  const draw = current.board.every(calculateDraw) && !winner
  // console.log(draw)

  // handling onClick for buttons
  function handleSquareClick(position) {
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1]

      const newBoard = last.board.map((elem, pos) => {
        if (position === pos) {
          return last.isXNext ? 'X' : 'O'
        }
        return elem
      })

      return prev.concat({ board: newBoard, isXNext: !last.isXNext })
    })
    setCurrentMove(prev => prev + 1)
  }

  function moveTo(idx) {
    setCurrentMove(idx)
  }

  function onNewGame() {
    setHistory([
      { board: Array(9).fill(null), isXNext: true },
    ])
    setCurrentMove(0)
  }

  return (
    <div className="app">
      <h1 className="name-heading">TIC <span className="text">TAC</span> TOE</h1>
      <div className="status-message">
        <h2>
          {draw ? 'Match draw' : <span className={winner === 'X' ? 'text-green' : 'text-orange'} id={winner === 'O' ? 'text-o' : 'text-orange'}>{message}</span>}
        </h2>
      </div>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner || draw ? 'active' : ''}`}>Start new Game</button>
      <h2 style={{ fontWeight: 'normal', color: '#F5F5F5' }}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className="bg-balls"></div>
    </div>
  )
}

export default App;