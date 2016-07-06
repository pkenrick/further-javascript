var toDoList =  new ToDoList();
toDoList.addTask(ToDoItem, "Go shopping");
toDoList.addTask(ToDoItem, "Make dinner");

document.getElementById('list').innerHTML = toDoList.display();