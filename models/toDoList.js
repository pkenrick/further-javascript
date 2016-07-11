(function(exports){

  function ToDoList() {
    this.tasks = [];
  }

  ToDoList.prototype.addTask = function(taskString, itemConstructor = ToDoItem) {
    this.tasks.push(new itemConstructor(taskString));
  };

  ToDoList.prototype.display = function() {
    var returnString = "<form id='completeTaskForm' action='/tasks/complete' method='post'>";
    var i = 0;
    this.tasks.forEach(function(task) {
      if (task.complete === false) {
        returnString += ("<div class='taskShownIncomplete'>" + task.text + ": Incomplete <input class='completeTaskButtons' id='completeTaskButton" + i + "' type='submit' value='Complete'/>" + "</div>");
      } else {
        returnString += ("<div class='taskShownComplete'>" + task.text + ": Complete <input class='completeTaskButtons' id='completeTaskButton" + i + "' type='submit' value='Reopen'/>" + "</div>");
      }
      i += 1;
    });
    return returnString += "</form>";
  };

  exports.ToDoList = ToDoList;

})(this);