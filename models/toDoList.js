// var ToDoItem = require("../models/toDoItem");

(function(exports){

  function ToDoList() {
    this.tasks = [];
  }

  ToDoList.prototype.addTask = function(taskString, itemConstructor = ToDoItem) {
    this.tasks.push(new itemConstructor(taskString));
  };

  ToDoList.prototype.display = function() {
    var returnString = "<form id='completeTaskForm' action='/tasks/complete' method='post'><ul>";
    var i = 0;
    this.tasks.forEach(function(task) {
      returnString += ("<li><div>" + task.task + ": " + task.completeString + " <input id='completeTaskButton" + i + "' type='submit' value='Complete'/>" + "</div></li>");
      i += 1;
    });
    // console.log(completeTaskButton);
    return returnString += "</ul></form>";
  };

  exports.ToDoList = ToDoList;

})(this);