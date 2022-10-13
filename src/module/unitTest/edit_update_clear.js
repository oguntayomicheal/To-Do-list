const handleInputChange = (taskArray, inputValue) => {
  taskArray[0].description = inputValue;
  return taskArray;
};

const taskStatus = (taskArray) => {
  if (taskArray[0].completed === false) {
    taskArray[0].completed = true;
  }
  return taskArray;
};

const clearCompleted = (taskArray) => {
  const newArr = taskArray.filter((each) => each.completed === false);
  return newArr;
};

export { clearCompleted, handleInputChange, taskStatus };