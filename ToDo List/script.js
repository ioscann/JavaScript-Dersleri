let tasks;

const taskName = document.querySelector(".task-input");
const addTask = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

addTask.addEventListener("click",addNewTask);
taskList.addEventListener("click",delOrCompTask);
document.addEventListener("DOMContentLoaded",readLocalStorage);

function createNewItem(task)
{
    const newDiv = document.createElement("div");
    newDiv.classList.add("task-item");

    taskList.appendChild(newDiv);

    const newLi = document.createElement("li");
    newLi.classList.add("task-name");
    newLi.innerText = task;

    newDiv.appendChild(newLi);

    const okBtn = document.createElement("button");
    okBtn.classList.add("task-ok");
    okBtn.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>'

    newDiv.appendChild(okBtn);

    const delBtn = document.createElement("button");
    delBtn.classList.add("task-del");
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    newDiv.appendChild(delBtn);
}

function addNewTask()
{
    if (taskName.value != 0)
    {
        createNewItem(taskName.value);

        saveLocaleStorage(taskName.value);
        taskName.value = "";
    }  
}


function localToArray()
{
    if (localStorage.getItem("tasks") === null) {tasks = [];}

    else {tasks = JSON.parse(localStorage.getItem("tasks"))}
}

function readLocalStorage()
{
    localToArray();

    tasks.forEach(function(task) {
        createNewItem(task);
    });
}

function saveLocaleStorage(task)
{
    localToArray();

    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function deleteFromLocalStorage(task)
{
    localToArray();

    const index = tasks.indexOf(task)

    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function delOrCompTask(e)
{
    const clickedTarget = e.target;
    console.log(clickedTarget);

    if (clickedTarget.classList.contains("task-ok"))
    {
        clickedTarget.parentElement.classList.toggle("task-complated");
    }

    if (clickedTarget.classList.contains("task-del"))
    {
        const deletedTask = clickedTarget.parentElement.children[0].innerText;

        clickedTarget.parentElement.remove();
        deleteFromLocalStorage(deletedTask);
    }
}