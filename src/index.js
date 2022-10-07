import _ from 'lodash';
import './style.css';

import addedTask from "./module/class.js"
import { addToLocalStorage, getFromLocalStorage } from "./module/localstorage.js"
import displayList from "./module/displaylist.js"

const filledTask = document.getElementById('addButton')
filledTask.addEventListener('click', () => {
    const myTask = document.getElementById('addTask')
    addedTask.taskObject(myTask.value)
    addedTask.reAssignIndex()
    displayList()
    myTask.value = '';
})

const handleInputChange = (id) => {
   const theid = document.getElementById(`edible${id}`);
   for(let p of addedTask.taskArray){
    if(p.index === id){
        p.description = theid.value
    }
   }
   addToLocalStorage()
   displayList()
}

if (localStorage.getItem('storedTask') == null) {
    addToLocalStorage();
} else {
    getFromLocalStorage();
}

window.handleInputChange = handleInputChange;