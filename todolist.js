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
// save tasks in data base
const data = {
  task : newTask.value.trim()
};
fetch('https://doda-o6sz.onrender.com/todos',{
  method : 'POST', 
  headers: {
    'Content-type': 'application/json'
  },
  body : JSON.stringify(data)
})
.then(response => {
  if(response.ok){
    console.log('La tache a bien enregistree');
  }
  else{
    console.error("Erreur lors de l'enregistrement de la tache :", response.status);
  }
})
.catch(error => 
  {console.log("Erreur lors de la requete :", error)
});
