// var ToDoItem = require("../models/toDoItem");

(function(exports){

  function ToDoList() {
    this.tasks = [];
  }

  ToDoList.prototype.addTask = function(itemConstructor = ToDoItem, taskString) {
    this.tasks.push(new itemConstructor(taskString));
  };

  ToDoList.prototype.display = function() {
    var returnString = "<ul>";
    this.tasks.forEach(function(task) {
      returnString += ("<li><div>"+task.task+"</div></li>");
    });
    return returnString += "</ul>";
  };

  exports.ToDoList = ToDoList;

})(this);