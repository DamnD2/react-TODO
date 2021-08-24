import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const statusTypeMap = {
  todo: { label: 'Todo', styleType: 'todo-button' },
  completed: { label: 'Completed', styleType: 'completed-button' },
};

const StatusButton = ({ type }) => {
  const statusType = statusTypeMap[type];
  const { label, styleType } = statusType;

  return <Button styleType={styleType}>{label}</Button>;
};

StatusButton.propTypes = { type: PropTypes.string.isRequired };

export default StatusButton;
