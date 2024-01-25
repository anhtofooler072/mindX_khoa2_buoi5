import React from "react";
import { useState } from "react";
import "./styles.css";

export default function Homepage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const calcProcess = (e) => {
    const value = e.target.innerText;
    switch (value) {
      case "C":
        setInput("");
        setResult("");
        break;
      case "=":
        setResult(eval(input));
        console.log(eval(input));
        break;
      default:
        setInput(input + value);
        break;
    }
  };
  console.log(input);

  return (
    <div className="container">
      <div className="calculator">
        <div className="result">
          <p className="text-md">{input}</p>
          <p className="text-3xl font-bold">{result}</p>
        </div>
        <div className="keypad">
          <div className="col-12">
          </div>
          <div className="row">
          <button className="col-3" onClick={calcProcess}>7</button>
          <button className="col-3" onClick={calcProcess}>8</button>
          <button className="col-3" onClick={calcProcess}>9</button>
          <button className="col-3" onClick={calcProcess}>/</button>
          </div>
          <div className="row">
          <button className="col-3" onClick={calcProcess}>4</button>
          <button className="col-3" onClick={calcProcess}>5</button>
          <button className="col-3" onClick={calcProcess}>6</button>
          <button className="col-3" onClick={calcProcess}>*</button>
          </div>
          <div className="row">
          <button className="col-3" onClick={calcProcess}>1</button>
          <button className="col-3" onClick={calcProcess}>2</button>
          <button className="col-3" onClick={calcProcess}>3</button>
          <button className="col-3" onClick={calcProcess}>-</button>
          </div>
          <div className="row">
          <button className="col-3" onClick={calcProcess}>0</button>
          <button className="col-3 bg-green-500 text-white hover:bg-green-600" onClick={calcProcess}>=</button>
          <button className="col-3" onClick={calcProcess}>C</button>
          <button className="col-3 bg-orange-500 text-white hover:bg-orange-600" onClick={calcProcess}>+</button>
          </div>
          <div/>
        </div>
      </div>
    </div>
  );
}
