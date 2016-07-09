(function(exports){

  var idCounter = 0;

  function ToDoItem(text) {
    this.text = typeof text === 'undefined' ? "" : text;
    this.complete = false;
    this.completeString = 'Incomplete';
  };

  ToDoItem.prototype.setText = function(text) {
    this.text = text;
  };

  ToDoItem.prototype.getText = function() {
    return this.text;
  };

  ToDoItem.prototype.completeTask = function() {
    if (this.complete === false) {
      this.complete = true;
      this.completeString = 'Complete';
    } else {
      this.complete = false;
      this.completeString = 'Incomplete';
    }

  };

  ToDoItem.prototype.checkComplete = function() {
    if (this.complete === true) {
      return 'Complete';
    } else {
      return 'Incomplete';
    };
  };

  exports.ToDoItem = ToDoItem;

})(this);