import React, { useState } from "react";
import "./App.css";
function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sign, setSign] = useState("+");
  const [result, setResult] = useState("");
  const [numberOfOperations, setnumberOfOperations] = useState(0);

  const handlefirstNumber = (e) => {
    setFirstNumber(e.target.value);
  };
  const handleNumberTwo = (e) => {
    setSecondNumber(e.target.value);
  };
  const changeSign = (e) => {
    setSign(e.target.value);
  };
  const calculate = () => {
    let calculatedResult;
    switch (sign) {
      case "+":
        calculatedResult = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        calculatedResult = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        calculatedResult = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        calculatedResult = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      default:
        calculatedResult = "";
    }

    setResult(calculatedResult);
    setnumberOfOperations(numberOfOperations + 1);
  };

  const reset = () => {
    setFirstNumber("");
    setSecondNumber("");
    setSign("+");
    setResult("");
  };
  return (
    <div className="App">
      <div className="decoration">
        <h1 className="heading"> Simple Calculator </h1>
        <div className="values">
          <input
            type="number"
            value={firstNumber}
            placeholder="Enter the first number"
            onChange={handlefirstNumber}
          />
          <select value={sign} onChange={changeSign}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="number"
            value={secondNumber}
            placeholder="Enter the second number"
            onChange={handleNumberTwo}
          />
        </div>
        <div className="buttons">
          <button onClick={calculate}>calculate</button>
          <button onClick={reset}>reset</button>
        </div>
        <div className="show-results">
          <h3>Result : {result}</h3>
          <h3>Number of operations : {numberOfOperations}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
