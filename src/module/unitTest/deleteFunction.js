const removeTask = (taskArray, ptask) => {
  taskArray = taskArray.filter((task) => task.description !== ptask.description);
};

export default removeTask;