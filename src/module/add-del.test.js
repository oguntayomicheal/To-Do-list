/**
 * @jest-environment jsdom
 */

import addedTask from './class.js';
import displayList from "./displaylist.js"


describe('Add and delete functions', () => {
    test('Add to task', () =>{
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

    addedTask.taskObject('Dance');
    addedTask.reAssignIndex()
    displayList()
    const myTask = document.querySelector('.task-item')
    expect(myTask.value).toBe('Dance')
    });




})