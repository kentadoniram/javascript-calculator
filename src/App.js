import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [currentVal, setCurrentVal] = useState("0");

  const endsWithOperator = /[*/+-]$/;
  const endsWithNegative = /\d[*/+-]{1}-$/;

  const handleNumber = (event) => {
    const number = event.target.value;
    if ((currentVal === "0" || display === "0") && currentVal.length <= 20) {
      setCurrentVal(number);
      setDisplay(number);
    } else if (currentVal.length <= 20 && !endsWithOperator.test(currentVal)) {
      setCurrentVal(currentVal + number);
      setDisplay(display + number);
    } else {
      setCurrentVal(number);
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.value;

    if (display.includes("=")) {
      setDisplay(currentVal + operator);
      setCurrentVal(currentVal + operator);
    } else if (!endsWithOperator.test(display) && display !== "") {
      setDisplay(display + operator);
      setCurrentVal(operator);
    } else if (endsWithOperator.test(display)) {
      if (endsWithNegative.test(display)) {
        setDisplay(display.slice(0, 1) + operator);
        setCurrentVal(operator);
      } else if (operator === "-") {
        setCurrentVal(operator);
        setDisplay(display + operator);
      }
    }
  };

  const handleClear = () => {
    setDisplay("");
    setCurrentVal("0");
  };

  const handleEqual = () => {
    if (!display.includes("=") && !endsWithOperator.test(display)) {
      setCurrentVal(eval(display));
      setDisplay(display + "=" + eval(display));
    } else if (endsWithOperator.test(display)) {
      const a = display.slice(0, -1);
      setDisplay(a + "=" + eval(a));
      setCurrentVal(eval(a));
    }
  };

  const handleDecimal = (e) => {
    const decimal = e.target.value;
    if (!currentVal.includes(".")) {
      setCurrentVal(currentVal + decimal);
      setDisplay(display + decimal);
    }
  };

  const handleDelete = () => {
    if (display.length !== 1 && !display.includes("=")) {
      setDisplay(display.slice(0, display.length - 1));
    } else {
      setDisplay("");
    }
  };

  const handlePercent = () => {};

  return (
    <div className="App">
      <div className="viewer">{display}</div>
      <div id="display" className="viewer">
        {currentVal}
      </div>
      <div className="calcu-frame">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="delete" onClick={handleDelete} value="del">
          del
        </button>
        <button id="percent" onClick={handlePercent} value="%">
          %
        </button>
        <button
          id="divide"
          className="operator"
          onClick={handleOperator}
          value="/"
        >
          ÷
        </button>
        <button id="seven" onClick={handleNumber} value="7">
          7
        </button>
        <button id="eight" onClick={handleNumber} value="8">
          8
        </button>
        <button id="nine" onClick={handleNumber} value="9">
          9
        </button>
        <button
          id="multiply"
          className="operator"
          onClick={handleOperator}
          value="*"
        >
          X
        </button>
        <button id="four" onClick={handleNumber} value="4">
          4
        </button>
        <button id="five" onClick={handleNumber} value="5">
          5
        </button>
        <button id="six" onClick={handleNumber} value="6">
          6
        </button>
        <button
          id="subtract"
          className="operator"
          onClick={handleOperator}
          value="-"
        >
          -
        </button>
        <button id="one" onClick={handleNumber} value="1">
          1
        </button>
        <button id="two" onClick={handleNumber} value="2">
          2
        </button>
        <button id="three" onClick={handleNumber} value="3">
          3
        </button>
        <button
          id="add"
          className="operator"
          onClick={handleOperator}
          value="+"
        >
          +
        </button>
        <button className="large" id="zero" onClick={handleNumber} value="0">
          0
        </button>
        <button id="decimal" onClick={handleDecimal} value=".">
          .
        </button>
        <button id="equals" onClick={handleEqual} value="=">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
