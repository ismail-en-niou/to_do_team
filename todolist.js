function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");
    
    // add task
    if (taskInput.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value + '<input  type="submit" value="delete" class="delete" onclick="removeTask(this)">';
      taskList.appendChild(li);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");

    // remove task
    }
  }