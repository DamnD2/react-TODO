import { useState, useEffect } from 'react';
import './App.scss';
import Todo from '../../components/Todo/Todo';
import Modal from '../../components/Modal/Modal';
import provider from '../../api/tasksApi/provider';
import Portal from '../../components/Portal/Portal';

const App = () => {
  const [tasks, setTasks] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [editTask, setEditTask] = useState({ isEdit: false, id: -1 });

  useEffect(() => {
    provider.getTasks
      .then(setTasks);
  }, []);

  const modalOpenProcessing = () => setIsModal(true);

  const modalCloseProcessing = () => setIsModal(false);

  const modalSaveProcessing = (target, modalState) => {
    const id = tasks.length + 1;
    const title = modalState;

    setTasks((prevState) => ([...prevState, {
      userId: 1,
      id,
      title,
      completed: true,
    }]));

    setIsModal(false);
  };

  const sortTasksById = (arrayOfObjects, delitedItemId) => {
    const resultArray = arrayOfObjects.map((task) => {
      const { id } = task;

      if (id > delitedItemId) {
        const newTask = Object.assign(task, { id: id - 1 });

        return newTask;
      }

      return task;
    });

    return resultArray;
  };

  const todoEditProcessing = (target) => {
    const { id } = target.closest('.todo__item').dataset;

    const newState = tasks.map((task) => {
      if (task.id === +id) {
        const { completed } = task;
        const newTask = Object.assign(task, { completed: !completed });

        return newTask;
      }

      return task;
    });

    setTasks(newState);
  };

  const todoRemoveProcessing = (target) => {
    const { id } = target.closest('.todo__item').dataset;
    const newTasks = tasks.filter((task) => task.id !== +id);
    const sortedTasks = sortTasksById(newTasks, id);

    setTasks(sortedTasks);
  };

  const todoEditTaskProcessing = (target) => {
    const { id } = target.closest('.todo__item').dataset;
    const formattedId = parseInt(id, 10);

    setEditTask({ isEdit: true, id: formattedId });
  };

  const todoSaveTaskProcessing = (target) => {
    const parentNode = target.closest('.todo__item');
    const resultTitle = parentNode.querySelector('.todo__item-title').value;
    const { id } = parentNode.dataset;

    const newState = tasks.map((task) => {
      if (task.id === +id) {
        const newTask = Object.assign(task, { title: resultTitle });

        return newTask;
      }

      return task;
    });

    setTasks(newState);
    setEditTask({ isEdit: false, id: -1 });
  };

  const typeOfPressedButtonMap = {
    add: modalOpenProcessing,
    'modal-close': modalCloseProcessing,
    'modal-save': modalSaveProcessing,
    'todo-button': todoEditProcessing,
    'completed-button': todoEditProcessing,
    'remove-button icon': todoRemoveProcessing,
    'edit-button icon': todoEditTaskProcessing,
    'save-button icon': todoSaveTaskProcessing,
  };

  const handleClick = (target, modalState) => {
    const buttonType = target.className;
    const processing = typeOfPressedButtonMap[buttonType];

    if (processing) processing(target, modalState);
  };

  return (
    <div className='app'>
      {isModal && <Portal><Modal onClick={handleClick} /></Portal>}
      <div className='header'>
        <h1 className='header-title'>TODO List Demo App</h1>
        <p className='header-text'>Do it now.</p>
      </div>
      <main className='main'>
        <Todo edit={editTask} onClick={handleClick} tasks={tasks} />
      </main>
    </div>
  );
};

export default App;
