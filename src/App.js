import "./App.css";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");
  const [currentVal, setCurrentVal] = useState("0");

  const endsWithOperator = /[*/+-]$/;
  const endsWithNegative = /\d[x/+-]{1}-$/;

  const handleNumber = (event) => {
    const number = event.target.value;
    if (
      (currentVal === "0" || endsWithOperator.test(currentVal)) &&
      currentVal.length <= 20
    ) {
      setCurrentVal(number);
      setDisplay(display + number);
    } else if (currentVal.length <= 20) {
      setCurrentVal(currentVal + number);
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.value;
    if (!endsWithOperator.test(display)) {
      setDisplay(currentVal + operator);
      setCurrentVal(operator);
    } else if (endsWithOperator.test(display)) {
      setDisplay(display.replace(endsWithOperator, operator));
    } else if (endsWithNegative.test(display)) {
      setDisplay(display + operator);
    }
    // if (!endsWithOperator.test(display)) {
    //   setDisplay(display + operator);
    // }
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
      setDisplay(a);
    }
    // const results = String(parseExpression(display));
    // setDisplay(results);
  };

  const handleDecimal = () => {
    // const regex = /(\d+)$/g;
    // const regex2 = /(\d+\.)$/g;
    // if (regex.test(display) || regex.test(display)) {
    //   setDisplay(display + ".");
    // }
  };

  const handleDelete = () => {
    if (display.length !== 1) {
      setDisplay(display.slice(0, display.length - 1));
    } else {
      setDisplay("0");
    }
  };

  const handlePercent = () => {};

  // const parseExpression = (expression) => {
  //   const regex = /(\d+|\+|-|\*|\/)/g;
  //   console.log(typeof expression);
  //   const token = expression.match(regex);

  //   let result = 0;
  //   let currentOperator = "+";

  //   for (const each of token) {
  //     if (each === "+" || each === "-" || each === "*" || each === "/") {
  //       currentOperator = each;
  //     } else {
  //       const number = parseFloat(each);
  //       if (currentOperator === "+") {
  //         result += number;
  //       } else if (currentOperator === "-") {
  //         result -= number;
  //       } else if (currentOperator === "*") {
  //         result *= number;
  //       } else if (currentOperator === "/") {
  //         if (number !== 0) {
  //           result /= number;
  //         } else {
  //           return "Division by zero";
  //         }
  //       }
  //     }
  //   }
  //   return result;
  // };

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
        <button id="divide" onClick={handleOperator} value="/">
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
        <button id="multiply" onClick={handleOperator} value="*">
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
        <button id="subtract" onClick={handleOperator} value="-">
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
        <button id="add" onClick={handleOperator} value="+">
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
