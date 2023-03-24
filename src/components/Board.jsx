import Square from "./Square"

export default function Board({ board, handleSquareClick, winningSquares }) {

    function renderSquare(position) {

        const isWinningSquare = winningSquares.includes(position)

        return (
            <Square value={board[position]} onClickButton={() => handleSquareClick(position)} isWinningSquare={isWinningSquare} />
        )
    }

    return (
        <main className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </main>
    )
}