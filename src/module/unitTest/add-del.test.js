/**
 * @jest-environment jsdom
 */

import addedTask from '../class.js';
import displayList from "../displaylist.js"
import removeTask from "./deleteFunction.js"



describe('Add and delete functions', () => {
    test('Add to task', () =>{
        //Arrange
        document.body.innerHTML = `
        <div id="toDolist">
        <div id="title">
            <h1>
                Today's To Do
            </h1>
            <i class="fa fa-refresh"></i>
        </div>
        <hr>
        <div id="enterTask">
            <input type="text" id="addTask" placeholder="Add to your list..." required>
           <button id="addButton"> <i class="fa fa-caret-right"></i></button>
        </div>
       
        <hr id="hrId">
        <ul id="list">
            
        </ul>
        
        <div id="clear">Clear all completed</div></a>
         </div> `;
         
         //act
         addedTask.taskObject('Dance');
        displayList()
        const myTask = document.querySelector('.task-item')
        
        //assert
        expect(myTask.value).toBe('Dance')
    });



test('Delete task', () => {
        let taskArray = [
            {
                description : "Dance",
                completed : false,
                index: 0
            },
            {
                description : "Hello",
                completed : false,
                index: 0
            }
        ]

        //Act
        removeTask(taskArray, taskArray[0])

        //Assert
        expect(addedTask.taskArray.length).toBe(1)
    })
});