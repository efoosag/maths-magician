import React from 'react';
// import { PropTypes } from 'prop-types';

function Label() {
  return (
    <div>
      <div className="container">
        <div className="answer">0</div>
        <div className="buttons">
          <div className="buttons-item buttons-item-others">AC</div>
          <div className="buttons-item buttons-item-others">+/-</div>
          <div className="buttons-item buttons-item-others">%</div>
          <div className="buttons-item buttons-item-right">/</div>
        </div>
        <div className="buttons">
          <div className="buttons-item buttons-item-others">7</div>
          <div className="buttons-item buttons-item-others">8</div>
          <div className="buttons-item buttons-item-others">9</div>
          <div className="buttons-item buttons-item-right">X</div>
        </div>
        <div className="buttons">
          <div className="buttons-item buttons-item-others">4</div>
          <div className="buttons-item buttons-item-others">5</div>
          <div className="buttons-item buttons-item-others">6</div>
          <div className="buttons-item buttons-item-right">-</div>
        </div>
        <div className="buttons">
          <div className="buttons-item buttons-item-others">1</div>
          <div className="buttons-item buttons-item-others">2</div>
          <div className="buttons-item buttons-item-others">3</div>
          <div className="buttons-item buttons-item-right">+</div>
        </div>
        <div className="buttons">
          <div className="buttons-item buttons-item-zero">0</div>
          <div className="buttons-item buttons-item-others">.</div>
          <div className="buttons-item buttons-item-right">=</div>
        </div>
      </div>
    </div>
  );
}

// Label.propTypes = {
//   zero: PropTypes.number.isRequired,
// };

export default Label;
