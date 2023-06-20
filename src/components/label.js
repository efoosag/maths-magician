import React, { useState } from 'react';
import calculate from '../logic/calculate';
// import calculate from '../logic/calculate';

function Label() {
  const [result, setResult] = useState({ total: 0, next: null, operation: null });
  const handleClick = (e) => {
    setResult(calculate(result, e.target.value));
  };
  return (
    <div>
      <div className="container">
        <div className="answer">
          {result.total}
          {' '}
          {result.operation}
          {' '}
          {result.next}
        </div>
        <div className="buttons">
          <button type="button" value="AC" onClick={handleClick} className="buttons-item buttons-item-others">AC</button>
          <button type="button" value="+/-" onClick={handleClick} className="buttons-item buttons-item-others">+/-</button>
          <button type="button" value="%" onClick={handleClick} className="buttons-item buttons-item-others">%</button>
          <button type="button" value="÷" onClick={handleClick} className="buttons-item buttons-item-right">/</button>
        </div>
        <div className="buttons">
          <button type="button" value="7" onClick={handleClick} className="buttons-item buttons-item-others">7</button>
          <button type="button" value="8" onClick={handleClick} className="buttons-item buttons-item-others">8</button>
          <button type="button" value="9" onClick={handleClick} className="buttons-item buttons-item-others">9</button>
          <button type="button" value="x" onClick={handleClick} className="buttons-item buttons-item-right">X</button>
        </div>
        <div className="buttons">
          <button type="button" value="4" onClick={handleClick} className="buttons-item buttons-item-others">4</button>
          <button type="button" value="5" onClick={handleClick} className="buttons-item buttons-item-others">5</button>
          <button type="button" value="6" onClick={handleClick} className="buttons-item buttons-item-others">6</button>
          <button type="button" value="-" onClick={handleClick} className="buttons-item buttons-item-right">-</button>
        </div>
        <div className="buttons">
          <button type="button" value="1" onClick={handleClick} className="buttons-item buttons-item-others">1</button>
          <button type="button" value="2" onClick={handleClick} className="buttons-item buttons-item-others">2</button>
          <button type="button" value="3" onClick={handleClick} className="buttons-item buttons-item-others">3</button>
          <button type="button" value="+" onClick={handleClick} className="buttons-item buttons-item-right">+</button>
        </div>
        <div className="buttons">
          <button type="button" value="0" onClick={handleClick} className="buttons-item buttons-item-zero">0</button>
          <button type="button" value="." onClick={handleClick} className="buttons-item buttons-item-others">.</button>
          <button type="button" value="" onClick={handleClick} className="buttons-item buttons-item-right">=</button>
        </div>
      </div>
    </div>
  );
}

// Label.propTypes = {
//   zero: PropTypes.number.isRequired,
// };

export default Label;
