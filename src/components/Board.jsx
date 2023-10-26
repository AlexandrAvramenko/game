import { useMemo, useState } from "react";
import History from "./History";
import Square from "./Square";

export default function Board({ field }) {
  const [history, setHistory] = useState([]);

  const boardSquares = useMemo(() => {
    const squares = [];
    for (let row = 0; row < field; row++) {
      for (let col = 0; col < field; col++) {
        squares.push(
          <Square
            row={row}
            col={col}
            key={`${row}-${col}`}
            setHistory={setHistory}
          />
        );
      }
    }
    return squares;
  }, [field, setHistory]);

  return (
    <div className="container">
      <div>
        <h3>Game board</h3>
        <div
          className="board"
          style={{
            gridTemplateColumns: `repeat(${field}, 1fr)`,
            gridTemplateRows: `repeat(${field}, 1fr)`,
          }}
        >
          {boardSquares}
        </div>
      </div>
      <History history={history} />
    </div>
  );
}
