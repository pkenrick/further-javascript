var toDoList =  new ToDoList();
toDoList.addTask("Go shopping");
toDoList.addTask("Make dinner");

document.getElementById('list').innerHTML = toDoList.display();