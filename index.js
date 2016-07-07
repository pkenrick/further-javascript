var toDoList =  new ToDoList();
toDoList.addTask(ToDoItem, "Go shopping");

document.getElementById('list').innerHTML = toDoList.display();

document.getElementById('addTaskButton').addEventListener('click', function (evt) {
  evt.preventDefault();
  toDoList.addTask(ToDoItem, document.getElementById('addTaskInput').value);
  document.getElementById('list').innerHTML = toDoList.display();
  // console.log(document.getElementById('addTaskInput').value);
});