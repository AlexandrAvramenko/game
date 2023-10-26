export default function History({ history }) {
  return (
    <div>
      <h3>Hover squares</h3>
      <ul className="list">
        {history.map((item, index) => (
          <li
            key={index}
            className="item"
          >{`row ${item.row} col ${item.col}`}</li>
        ))}
      </ul>
    </div>
  );
}
