import React from 'react';
import PropTypes from 'prop-types';

export default function CalculatorForm(props) {
  return (
    <div>
      <p>Value: {props.value}</p>
      <button type="button" onClick={props.add}>Add</button>
      <button type="button" onClick={props.subtract}>Subtract</button>
    </div>
  );
};

CalculatorForm.propTypes = {
  value: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired
};