import "../css/numberButton.css"

function NumberButton({ number, onClick }) {
  return (
    <button className="number-button" onClick={() => onClick(number)}>
      {number}
    </button>
  );
}

export default NumberButton;