var toDoList =  new ToDoList();
toDoList.addTask("Go shopping", ToDoItem);

updateList();

function updateList() {
  document.getElementById('list').innerHTML = toDoList.display();
  // document.getElementById('completeTaskButton').addEventListener('click', function(evt){ evt.preventDefault() });
}

document.getElementById('addTaskButton').addEventListener('click', function (evt) {
  evt.preventDefault();
  toDoList.addTask(document.getElementById('addTaskInput', ToDoItem).value);
  updateList();
  console.log('buttons are ' + document.getElementById('completeTaskButton'));
});

document.getElementById('completeTaskButton').addEventListener('click', function(evt){ 
  evt.preventDefault()
  
});