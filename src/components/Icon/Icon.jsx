import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from './edit.svg';
import RemoveIcon from './remove.svg';
import SaveIcon from './save.svg';
import './Icon.scss';

const iconTypeMap = {
  'edit-button': EditIcon,
  'remove-button': RemoveIcon,
  'save-button': SaveIcon,
};

const Icon = ({ type }) => {
  const iconSource = iconTypeMap[type];

  return <img src={iconSource} className={`${type} icon`} alt='icon' />;
};

Icon.propTypes = { type: PropTypes.string.isRequired };

export default Icon;
