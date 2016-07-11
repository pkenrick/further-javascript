var toDoList =  new ToDoList();
toDoList.addTask("Go shopping");
var flashMessage;

addTasksFromApi();
updateList();

function updateList() {
  document.getElementById('list').innerHTML = toDoList.display();
  flashMessage ? document.getElementById('flashMessage').innerHTML = flashMessage : ''
}

document.getElementById('addTaskButton').addEventListener('click', function (evt) {
  evt.preventDefault();
  toDoList.addTask(document.getElementById('addTaskInput', ToDoItem).value);
  flashMessage = 'New task added'
  updateList();
});

document.getElementById('list').addEventListener('click', function(evt){ 
  evt.preventDefault();
  console.log(toDoList.tasks[evt.target.id.slice(18)]);
  toDoList.tasks[evt.target.id.slice(18)].completeTask();  
  updateList();
});
