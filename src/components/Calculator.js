import React from 'react';
import Label from './label';
import './Calculator.css';

function Calculator() {
  return (
    <div className="cal-container">
      <h3>Let&apos;s do some maths!</h3>
      <div className="cal-label"><Label /></div>
    </div>
  );
}

export default Calculator;
