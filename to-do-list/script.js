document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function (){
        const taskText =taskInput.value.trim();
        if (taskText==="") return;
        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">X</buttom>`;
        taskList.appendChild(li);

        taskInput.value = "";

        li.querySelector(".delete").addEventListener("click", function(){
            li.remove();

        });
    });
});