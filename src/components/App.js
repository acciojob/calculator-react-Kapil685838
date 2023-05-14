import React, { useState } from 'react';
import '../styles/App.css';

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="App">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button onClick={clear} id="clear">C</button>
        <button onClick={handleClick} name="/" className="operator">/</button>
        <button onClick={handleClick} name="*" className="operator">*</button>
        <button onClick={handleClick} name="-" className="operator">-</button>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button onClick={handleClick} name="+" className="operator" id='plus' aria-rowspan={2}>+</button>
        <button onClick={handleClick} name="4">4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button onClick={calculate} id="result">=</button>
        <button onClick={handleClick} name="0">0</button>
        <button onClick={handleClick} name=".">.</button>
      </div>
    </div>
  );
}

export default App;

