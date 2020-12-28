import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Switch = ({ onToggle, checked, color, labelOff, labelOn }) => {
  const [isChecked, setIsChecked] = useState(checked);
  const toggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };
  const renderLabel = (label, isDisabled) => (
    <span
      className={`Switch-label ${
        isChecked === isDisabled ? 'Switch-label--active' : ''
      }`}
    >
      {label}
    </span>
  );
  return (
    <div>
      {renderLabel(labelOff, false)}
      <label data-testid="Switch" className="Switch" htmlFor="Switch-input">
        <input
          id="Switch-input"
          data-testid="Switch-input"
          className="visually-hidden"
          type="checkbox"
          onChange={toggle}
          checked={isChecked}
        />
        <span className={`Switch-slider round ${color}`} />
      </label>
      {renderLabel(labelOn, true)}
    </div>
  );
};

Switch.propTypes = {
  onToggle: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  labelOff: PropTypes.string,
  labelOn: PropTypes.string
};

Switch.defaultProps = {
  onToggle: () => {},
  checked: false,
  color: 'primary',
  labelOff: '',
  labelOn: ''
};

export default Switch;
