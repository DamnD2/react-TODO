import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import './TodoItem.scss';
import StatusButton from '../StatusButton/StatusButton';

const TodoItem = ({ task, isEdit }) => {
  const { id, title, completed } = task;

  return (
    <li className='todo__item' key={id} data-id={id}>
      <span className='todo__item-id'>{id}</span>
      {(
        isEdit
          ? <input className='todo__item-title' defaultValue={title} />
          : <span className='todo__item-title'>{title}</span>
      )}
      <span className='todo__item-status'>
        <StatusButton classList='item-status' type={completed ? 'completed' : 'todo'} />
      </span>
      {(
        isEdit
          ? (
            <span className='todo__item-save'>
              <Button styleType='save-button'><Icon type='save-button' /></Button>
            </span>
          )
          : (
            <span className='todo__item-edit'>
              <Button styleType='edit-button'><Icon type='edit-button' /></Button>
            </span>
          )
      )}
      <span className='todo__item-remove'>
        <Button styleType='remove-button'><Icon type='remove-button' /></Button>
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  isEdit: PropTypes.bool,
};

TodoItem.defaultProps = { task: {}, isEdit: false };

export default TodoItem;
