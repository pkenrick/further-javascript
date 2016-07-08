(function(exports){

  var idCounter = 0;

  function ToDoItem(task) {
    this.task = typeof task === 'undefined' ? "" : task;
    this.isComplete = false;
    this.completeString = 'Incomplete';
    this.id = idCounter++;
  };

  ToDoItem.prototype.setTask = function(task) {
    this.task = task;
  };

  ToDoItem.prototype.getTask = function() {
    return this.task;
  };

  ToDoItem.prototype.complete = function() {
    this.isComplete = true;
    this.completeString = 'Complete';
  };

  ToDoItem.prototype.checkComplete = function() {
    if (this.isComplete === true) {
      return 'Complete';
    } else {
      return 'Incomplete';
    };
  };

  exports.ToDoItem = ToDoItem;

})(this);