import _ from 'lodash';
import './style.css';


const taskArray = [
    {
        description : "I want to Eat",
        completed : true,
        index: 0
    },
    {
        description : "cook my meal",
        completed : false,
        index: 1
    },
    {
        description : "dance in the club",
        completed : true,
        index: 2
    }

]

const list = document.getElementById('list')

 const createList = () => {
    const sortedArray = taskArray.sort((a, b)=> a.index - b.index)
    sortedArray.forEach((task) => {
    const eachTask = document.createElement('li');
    eachTask.innerHTML = `<div id="eachTask">
        <div><input type="checkbox" name=" " class="task">
        <label for="">${task.description}</label></div>
        <i class="fa fa-ellipsis-v"></i>
        </div><hr>`
    list.appendChild(eachTask)
  })
 }

 document.addEventListener('DOMContentLoaded', createList)