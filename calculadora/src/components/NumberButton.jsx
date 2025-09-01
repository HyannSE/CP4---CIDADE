function NumberButton({number,onclick}){
    return (
        <button onClick={() => onclick(number)}>
            {number}
        </button>
    )
}

export default NumberButton;