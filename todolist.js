function addTask() {
    var newTask = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");
    
    // add task
    if (newTask.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = newTask.value + '<input  type="submit" value="delete" class="delete" onclick="removeTask(this)">';
      taskList.appendChild(li);
      newTask.value = "";
    } else {
      alert("Please enter a task!");

    // remove task
    }
  }