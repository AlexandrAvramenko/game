import { useEffect, useState } from "react";
import Board from "./components/Board";

export default function App() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    fetch("https://60816d9073292b0017cdd833.mockapi.io/modes")
      .then((response) => response.json())
      .then((json) => setOptions(json));
  }, []);

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
    setStart(false);
  }

  function handleStartingGame() {
    if (selectedOption) {
      setStart(true);
    } else {
      alert("Please select a mode");
    }
  }

  return (
    <div className="game">
      <h3>To start, select the mode</h3>
      <select
        id="mode"
        name="mode"
        onChange={handleOptionChange}
        value={selectedOption}
        className="select"
      >
        <option value="" disabled defaultValue hidden>
          Pick mode
        </option>
        {options.map((mode) => (
          <option key={mode.id} value={mode.field}>
            {mode.name}
          </option>
        ))}
      </select>
      <button onClick={handleStartingGame}>Start</button>
      {start && (
        <div>
          <Board field={selectedOption} />
        </div>
      )}
    </div>
  );
}
