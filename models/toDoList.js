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
      if (task.complete === false) {
        returnString += ("<li><div>" + task.text + ": Incomplete <input id='completeTaskButton" + i + "' type='submit' value='Complete'/>" + "</div></li>");
      } else {
        returnString += ("<li><div>" + task.text + ": Complete <input id='completeTaskButton" + i + "' type='submit' value='Redo'/>" + "</div></li>");
      }
      i += 1;
    });
    return returnString += "</ul></form>";
  };

  exports.ToDoList = ToDoList;

})(this);