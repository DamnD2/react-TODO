/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';
import Button from '../Button/Button';
import './Todo.scss';

const Todo = ({ tasks, onClick, edit }) => {
  const getTodoList = () => {
    const { isEdit, id } = edit;

    const listItems = tasks.map((task) => {
      if (id === task.id) {
        return <TodoItem task={task} key={task.id} isEdit={isEdit} />;
      }

      return <TodoItem task={task} key={task.id} />;
    });

    return listItems;
  };

  return (
    <div onClick={() => onClick(event.target)}>
      <span className='add-task'><Button styleType='add'>Add Task</Button></span>
      <ul className='todo'>
        <li className='todo-title'>
          <span className='todo__title-id'>#</span>
          <span className='todo__title-title'>Task Name</span>
          <span className='todo__title-status'>Status</span>
          <span className='todo__title-edit'>Edit</span>
          <span className='todo__title-remove'>Remove</span>
        </li>
        {tasks && getTodoList()}
      </ul>
    </div>
  );
};

export default Todo;

Todo.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func.isRequired,
  edit: PropTypes.shape({ isEdit: PropTypes.bool, id: PropTypes.number }),
};
Todo.defaultProps = { tasks: null, edit: { isEdit: false, id: -1 } };
