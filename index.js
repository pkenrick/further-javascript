var toDoList =  new ToDoList();
toDoList.addTask("Go shopping");

// var request = new XMLHttpRequest();
// request.open('GET', encodeURI('http://quiet-beach-24792.herokuapp.com/todos.json'));
// request.onreadystatechange = function(response) {
//   if (request.readyState === 4 && request.status === 200) {
//     toDoList.tasks = JSON.parse(request.responseText);
//     console.log(toDoList.tasks);
//     updateList();
//   };
// };
// request.send();

updateList();

function updateList() {
  document.getElementById('list').innerHTML = toDoList.display();
}

document.getElementById('addTaskButton').addEventListener('click', function (evt) {
  evt.preventDefault();
  toDoList.addTask(document.getElementById('addTaskInput', ToDoItem).value);
  updateList();
});

document.getElementById('list').addEventListener('click', function(evt){ 
  evt.preventDefault();
  toDoList.tasks[evt.target.id.slice(-1)].completeTask();  
  updateList();
});
