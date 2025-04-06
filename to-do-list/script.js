document.addEventListener("DOMContentLoaded", function(){

    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    
    let tasks = loadFromLocalStorage();

    function saveToLocalStorage(){
        localStorage.setItem("tasks",JSON.stringify(tasks)); 

    }

    function loadFromLocalStorage(){
        const storedTask = localStorage.getItem("tasks");
        return storedTask ? JSON.parse(storedTask) : [];
    }

    function renderTasks(){
        taskList.innerHTML = "";
        tasks.forEach((taskText, index)=> {
            const li = document.createElement("li");
            li.innerHTML = `${taskText} <button class="delete">X</buttom>`;
            taskList.appendChild(li);

            li.querySelector(".delete").addEventListener("click", function(){
                deleteTask(index);
            });
        });
    }
    
    function addTask(){
        const taskText =taskInput.value.trim();
        console.log("addng:" , taskText);

       

        if (taskText==="") return;
        tasks.push(taskText);
        saveToLocalStorage();
        taskInput.value = "";
        renderTasks();
    }

    function deleteTask(index){
        tasks.splice(index,1);
        saveToLocalStorage();
        renderTasks();
    }

    addTaskButton.addEventListener("click", addTask);
    renderTasks();

});