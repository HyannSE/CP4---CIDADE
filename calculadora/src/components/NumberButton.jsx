import "../css/numberButton.css"

function NumberButton({number,onclick}){
    return (
        <button className = "number-button" onClick={() => onclick(number)}>
            {number}
        </button>
    )
}

export default NumberButton;