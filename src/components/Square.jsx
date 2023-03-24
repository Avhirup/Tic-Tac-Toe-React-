export default function Square({ value, onClickButton, isWinningSquare }) {
    return (
        <button type="button" onClick={onClickButton} className={`square ${isWinningSquare ? 'winning' : ''} ${value === 'X' ? 'text-green' : 'text-blue'}`} >
            {value}
        </button>
    )
}