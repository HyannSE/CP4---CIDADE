import { useState } from "react";
import Display from "./components/Display";
import NumberButton from "./components/NumberButton";
import OperationButton from "./components/OperationButtonn";
import "./css/app.css";


function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumber = (num) => {
    setCurrent(current + num);
  };

  const handleOperation = (op) => {
    if (!current) return;
    if (previous) calcular();
    else {
      setPrevious(current);
      setCurrent("");
    }
    setOperation(op);
  };

  const calcular = () => {
    const n1 = parseFloat(previous);
    const n2 = parseFloat(current);
    if (isNaN(n1) || isNaN(n2)) return;

    let res;
    switch (operation) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/": res = n2 === 0 ? "Erro" : n1 / n2; break;
      default: return;
    }

    setCurrent(res.toString());
    setPrevious("");
    setOperation(null);
  };

  const handleClear = () => {
    setCurrent("");
    setPrevious("");
    setOperation(null);
  };

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <Display value={current} />

      <div className="calculator-grid">
        <NumberButton number="7" onClick={handleNumber} />
        <NumberButton number="8" onClick={handleNumber} />
        <NumberButton number="9" onClick={handleNumber} />
        <OperationButton operation="/" onClick={handleOperation} />

        <NumberButton number="4" onClick={handleNumber} />
        <NumberButton number="5" onClick={handleNumber} />
        <NumberButton number="6" onClick={handleNumber} />
        <OperationButton operation="*" onClick={handleOperation} />

        <NumberButton number="1" onClick={handleNumber} />
        <NumberButton number="2" onClick={handleNumber} />
        <NumberButton number="3" onClick={handleNumber} />
        <OperationButton operation="-" onClick={handleOperation} />

        <NumberButton number="0" onClick={handleNumber} />
        <button className="equals-button" onClick={calcular}>=</button>
        <button className="clear-button" onClick={handleClear}>C</button>
        <OperationButton operation="+" onClick={handleOperation} />
      </div>
    </div>
  );
}

export default App;