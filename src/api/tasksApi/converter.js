import Task from '../../entities/task';

export const converter = (tasks) => {
  const newTasks = tasks.reduce((accum, task) => {
    const newTask = new Task({
      id: task.id,
      title: task.title,
      completed: task.completed,
    });

    accum.push(newTask);

    return accum;
  }, []);

  return newTasks;
};
