var toDoList =  new ToDoList();
toDoList.addTask("Go shopping");

console.log('1');

// var promise = new Promise(function(fulfill, reject) {
  var request = new XMLHttpRequest();
  request.open('GET', encodeURI('http://quiet-beach-24792.herokuapp.com/todos.json'));
  request.onreadystatechange = function(response) {
      if (request.readyState === 4 && request.status === 200) {
      toDoList.tasks = JSON.parse(request.responseText);
      updateList();
      // fulfill('yes');
      console.log('4')
    };
  };
  request.send();
  console.log('2');
// });

console.log('3');

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
  toDoList.tasks[evt.target.id.slice(18)].completeTask();  
  updateList();
});
