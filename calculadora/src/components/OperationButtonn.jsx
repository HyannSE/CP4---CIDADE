import "../css/operationButton.css"

function OperationButton({ operation, onClick }) {
  return (
    <button className="operation-button" onClick={() => onClick(operation)}>
      {operation}
    </button>
  );
}

export default OperationButton;
