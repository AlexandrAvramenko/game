import { useState } from "react";

export default function Square({ row, col, setHistory }) {
  const [hoveredSquares, setHoveredSquares] = useState(false);
  const squareClass = `square ${hoveredSquares ? "hovered" : ""}`;

  function handleSquareHover() {
    setHoveredSquares((prev) => !prev);
    setHistory((prev) => [...prev, { row, col }]);
  }

  return <div className={squareClass} onMouseEnter={handleSquareHover}></div>;
}
