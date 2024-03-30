var newTask = document.getElementById("newTask");
var taskList = document.getElementById("taskList");

function addTask() { 
    // add task
    if (newTask.value.trim() !== "") {
      var li = document.createElement("li");
      li.innerHTML = '<div class="tasks"> <input type="checkbox">' + newTask.value + '<input  type="submit" value="Remove" class="delete" onclick="removeTask(this)"> </div>';
      taskList.appendChild(li);
      newTask.value = "";
    } else {
      alert("Please enter a task!");
    }
  }

function removeTask(input) {
    // remove task
    var li = input.parentElement;
    taskList = li.parentElement;
    taskList.removeChild(li);   
}
