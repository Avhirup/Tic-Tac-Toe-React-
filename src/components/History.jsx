export default function History({ history, moveTo, currentMove }) {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {
                    history.map((_, idx) => {
                        return (
                            <li key={idx}><button className={`btn-move ${idx === currentMove ? 'active' : ''}`} type="button" onClick={() => { moveTo(idx) }}>{idx === 0 ? `Start the Game` : `Go to move #${idx}`}</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}