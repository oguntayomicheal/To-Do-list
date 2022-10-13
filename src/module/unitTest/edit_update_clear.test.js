/**
 * @jest-environment jsdom
 */

import addedTask from '../class.js';
import { clearCompleted, handleInputChange, taskStatus } from './edit_update_clear.js';

describe('Task edit, update and clear', () => {
  test('edit task description', () => {
    // Arrange
    document.body.innerHTML = `
    <div id="enterTask">
        <input type="text" id="addTask" placeholder="Add to your list..." required>
       <button id="addButton"> <i class="fa fa-caret-right"></i></button>
    </div>
   
    <hr id="hrId">
    <ul id="list">

    <input contentEditable id="edible1" class="task-item"  value="Hello" />
    
    </ul>
    <div id="clear">Clear all completed</div></a>
    `;

    const inputValue = document.getElementById('edible1').value;

    let taskArray = [
      {
        description: 'Dance',
        completed: false,
        index: 0,
      },
      {
        description: 'Mother',
        completed: true,
        index: 1,
      },
    ];
    // Act
    taskArray = handleInputChange(taskArray, inputValue);
    // Assert
    expect(taskArray[0].description).toEqual(inputValue);
  });

  test('Update completed status', () => {
    // Arrange
    addedTask.taskObject('Dance');
    // Act
    const taskArray = taskStatus(addedTask.taskArray);
    // Assert
    expect(taskArray[0].completed).toBe(true);
  });

  test('clear completed task', () => {
    // Arrange
    let taskArray = [
      {
        description: 'Dance',
        completed: false,
        index: 0,
      },
      {
        description: 'Hello',
        completed: true,
        index: 1,
      },
    ];
    // Act
    taskArray = clearCompleted(taskArray);
    // Assert
    expect(taskArray.length).toBe(1);
  });
});
