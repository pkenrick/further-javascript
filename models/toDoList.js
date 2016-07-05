var ToDoItem = require("../models/toDoItem");

function ToDoList() {
  this.tasks = [];
}

ToDoList.prototype.addTask = function(taskString) {
  this.tasks.push(new ToDoItem(taskString));
};

module.exports = ToDoList