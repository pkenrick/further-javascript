function addTasksFromApi(){

  var request = new XMLHttpRequest();
  request.open('GET', encodeURI('http://quiet-beach-24792.herokuapp.com/todos.json'));
  request.onreadystatechange = function(response) {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      for(var i = 0; i < data.length; i++){
        toDoList.addTask(data[i].text);
        if (data[i].completed) { 
          toDoList.tasks[toDoList.tasks.length - 1].complete = true;
          toDoList.tasks[toDoList.tasks.length - 1].completeString = 'Complete'
        } else {
          toDoList.tasks[toDoList.tasks.length - 1].completeString = 'Incomplete'
        }
      };
      updateList();
    };
  };
  request.send();

};