import
import { useState } from 'react'
import Header from './components/Header'



function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      alert("Digite números válidos!");
      return;
    }

    let res;
    switch (operacao) {
      case "+": res = n1 + n2; break;
      case "-": res = n1 - n2; break;
      case "*": res = n1 * n2; break;
      case "/":
        if (n2 === 0) {
          alert("Não é possível dividir por zero!");
          return;
        }
        res = n1 / n2;
        break;
      default: return;
    }

    setResultado(res);
  };

  return (
    <div className="App">
      <h1>Calculadora com Componentes</h1>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="botoes">
        <Button operacao="+" onClick={calcular} />
        <Button operacao="-" onClick={calcular} />
        <Button operacao="*" onClick={calcular} />
        <Button operacao="/" onClick={calcular} />
      </div>
      <Display resultado={resultado} />
    </div>
  );
}

export default App;
