var toDoList =  new ToDoList();
toDoList.addTask(ToDoItem, "Go shopping");
// toDoList.addTask(ToDoItem, "Make lunch");


document.getElementById('list').innerHTML = toDoList.display();

var el = document.getElementById('addTask')

document.getElementById('addButton').addEventListener('click', function (evt) {
  console.log(el.textInput.value);
  evt.preventDefault();
});