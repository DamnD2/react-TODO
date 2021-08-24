import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, styleType }) => (
  <button className={styleType}>{children}</button>
);

Button.propTypes = {
  styleType: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Button.defaultProps = { children: 'Button' };

export default Button;
