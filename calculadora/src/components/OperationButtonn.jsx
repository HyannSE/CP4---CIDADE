function OperationButton({operation,onclick}){
    return(
        <button className="operation-button" onClick={() => onclick(operation)}>
            {operation}
        </button>
    )
}

export default OperationButton;
