const newTask = document.querySelector(".input-task");
const addTask = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");

addTask.addEventListener("click", addTaskFunction);
taskList.addEventListener("click", removeOrFinishTask);
document.addEventListener("DOMContentLoaded",readLocalStorage);

let tasks;

function addTaskFunction(e)
{
    if (newTask.value.length != 0)
    {
        createTaskItem(newTask.value);

        //localStoge'a kaydet
        saveLocalStorage(newTask.value);
        newTask.value = "";
    } 
}

function removeOrFinishTask(e)
{
    const clickedTarget = e.target;
    console.log(clickedTarget);

    if (clickedTarget.classList.contains("task-ok"))
    {
        console.log("task-ok clicked");
        clickedTarget.parentElement.classList.toggle("task-complated");
    }

    if (clickedTarget.classList.contains("task-del"))
    {
        if (confirm("Emin misin ?"))
        {
            console.log("task-del clicked");
            clickedTarget.parentElement.classList.toggle("dissapear");
            const deletedTask = clickedTarget.parentElement.children[0].innerText;
            
            clickedTarget.parentElement.addEventListener("transitionend", function() {
            clickedTarget.parentElement.remove();
            deleteFromLocalStorage(deletedTask);
            console.log("deleted");
            }); 
        }
    }
};

function saveLocalStorage(task)
{
    storageToArray();

    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function readLocalStorage()
{
    storageToArray();

    tasks.forEach(function(task) {
        createTaskItem(task);
    });
}

function deleteFromLocalStorage(task)
{
    storageToArray();

    const deletedTaskIndex = tasks.indexOf(task);
    tasks.splice(deletedTaskIndex,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function storageToArray()
{
    if (localStorage.getItem("tasks") === null) {tasks = [];}

    else {tasks = JSON.parse(localStorage.getItem("tasks"));}
}

function createTaskItem(task)
{
    // div oluşturma
    const newDiv = document.createElement("div");
    newDiv.classList.add("task-item");

    const newLi = document.createElement("li");
    newLi.classList.add("task-name");
    newLi.innerText = task;
    newDiv.appendChild(newLi);

    // ul ye ekle
    taskList.appendChild(newDiv);

    //tamamlandı butonu ekle
    const taskComplated = document.createElement("button");
    taskComplated.classList.add("task-btn");
    taskComplated.classList.add("task-ok");
    taskComplated.innerHTML = '<i class="fa-solid fa-check-to-slot"></i>'

    newDiv.appendChild(taskComplated);

    //sil butonu ekle
    const removeTask = document.createElement("button");
    removeTask.classList.add("task-btn");
    removeTask.classList.add("task-del");
    removeTask.innerHTML = '<i class="fa-solid fa-trash"></i>'

    newDiv.appendChild(removeTask);
}